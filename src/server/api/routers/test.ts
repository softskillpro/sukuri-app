import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaClient, Project as PrismaProject, User as PrismaUser, Category as PrismaCategory } from '@prisma/client';


// Define a helper type to map table names to their respective Prisma model types
type ModelMap = {
    project: PrismaProject,
    user: PrismaUser,
    category: PrismaCategory
};

// Define the shape of the input for the full-text search
const SearchInput = z.object({
    table: z.enum(['project', 'user', 'category']), // Enum ensures only these values are allowed
    query: z.string(), // The search query
    limit: z.number().optional().default(10),
    offset: z.number().optional().default(0),
});

export const searchRouter = createTRPCRouter({
    fullTextSearch: publicProcedure.input(SearchInput).query(async ({ input, ctx }) => {
        const { table, query, limit, offset } = input;

        // Since we know the exact tables we're dealing with, we can map them directly
        // to their corresponding Prisma model methods.
        const model = ctx.prisma[table as keyof PrismaClient];

        const results = await model.findMany({
            where: {
                // Assume 'searchableColumn' exists and is the column with full-text search index
                searchableColumn: {
                    search: query,
                },
            },
            take: limit,
            skip: offset,
        });

        return results;
    }),
});
