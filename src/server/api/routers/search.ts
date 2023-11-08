import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaClient } from '@prisma/client';

/**
 * @typedef {z.ZodTypeAny} WhereInput
 * @description Recursive Zod schema for validating the `where` input structure.
 */
const WhereInput: z.ZodTypeAny = z.lazy(() => z.record(
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(z.lazy(() => WhereInput)),
    WhereInput,
  ])
));

/**
 * @typedef {Object} SearchInput
 * @property {z.ZodEnum<["project", "user", "category"]>} table - Searchable table name.
 * @property {WhereInput} [where] - Optional search conditions.
 * @property {number} [limit=10] - Result limit for pagination.
 * @property {number} [offset=0] - Result offset for pagination.
 * @description Zod schema for search input parameters.
 */
const SearchInput = z.object({
  table: z.enum(['project', 'user', 'category']),
  where: WhereInput.optional(),
  limit: z.number().optional().default(10),
  offset: z.number().optional().default(0),
});

type SearchableTable = 'project' | 'user' | 'category';

type ProjectFindManyArgs = Parameters<PrismaClient['project']['findMany']>;
type UserFindManyArgs = Parameters<PrismaClient['user']['findMany']>;
type CategoryFindManyArgs = Parameters<PrismaClient['category']['findMany']>;

/**
 * @function getFindManyFunction
 * @param {Object} ctx - The context object containing PrismaClient.
 * @param {SearchableTable} table - The table name to perform the search on.
 * @returns {Function} A PrismaClient findMany function specific to the provided table.
 * @throws {Error} Throws an error if an unsupported table is provided.
 * @description Retrieves the PrismaClient's findMany function for a given table.
 */
function getFindManyFunction(
  ctx: { prisma: PrismaClient },
  table: SearchableTable
): (args: any) => Promise<any> { // Using any for demonstration purposes; should be replaced with the correct argument and return types.
  switch (table) {
    case 'project':
      return (args: ProjectFindManyArgs[0]) => ctx.prisma.project.findMany(args);
    case 'user':
      return (args: UserFindManyArgs[0]) => ctx.prisma.user.findMany(args);
    case 'category':
      return (args: CategoryFindManyArgs[0]) => ctx.prisma.category.findMany(args);
    default:
      throw new Error(`Unsupported table: ${table}`);
  }
}

/**
 * @module searchRouter
 * @function fullTextSearch
 * @param {SearchInput} input - The input parameters for the search.
 * @param {Object} ctx - The context object containing PrismaClient.
 * @returns {Promise<any[]>} A promise that resolves to the search results.
 * @throws {Error} Throws an error if a database or an unexpected error occurs.
 * @description TRPC router handler for full-text search on specified tables.
 */
export const searchRouter = createTRPCRouter({
  fullTextSearch: publicProcedure.input(SearchInput).query(async ({ input, ctx }) => {
    const { table, where, limit, offset } = input;

    const findMany = getFindManyFunction(ctx, table as SearchableTable);

    try {
      const results = await findMany({
        where,
        take: limit,
        skip: offset,
      });
      return results;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new Error('Search failed due to a database error.');
      }
      throw error;
    }
  }),
});
