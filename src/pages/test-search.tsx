import React, { useState } from 'react';
import { api } from '@/utils/api'; // Adjust the import path to where you export your trpc hooks

type SearchParams = {
    table: 'project' | 'user' | 'category';
    searchField?: string;
    searchText?: string;
    limit: number;
    offset: number;
};

/**
 * This is a test page for search operations, including:
 * - Dynamic search on tables
 * It was assisted by ChatGPT from OpenAI.
 */

const SearchPage: React.FC = () => {
    const [searchParams, setSearchParams] = useState<SearchParams>({
        table: 'project',
        limit: 10,
        offset: 0,
    });

    const { data: searchResults, error, isLoading } = api.search.fullTextSearch.useQuery({
        table: searchParams.table,
        where: searchParams.searchField && searchParams.searchText
            ? { [searchParams.searchField]: { contains: `${searchParams.searchText}`,
                mode: 'insensitive' } }
            : {},
        limit: searchParams.limit,
        offset: searchParams.offset,
    });

    const handleTableChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchParams((prev) => ({ ...prev, table: event.target.value as 'project' | 'user' | 'category' }));
    };

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams((prev) => ({ ...prev, searchField: event.target.value }));
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams((prev) => ({ ...prev, searchText: event.target.value }));
    };

    const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams((prev) => ({ ...prev, limit: Number(event.target.value) }));
    };

    return (
        <div>
            <h1>Search</h1>
            <div>
                <label>
                    Table:
                    <select value={searchParams.table} onChange={handleTableChange}>
                        <option value="project">Project</option>
                        <option value="user">User</option>
                        <option value="category">Category</option>
                    </select>
                </label>
                <label>
                    Field:
                    <input
                        type="text"
                        value={searchParams.searchField || ''}
                        onChange={handleFieldChange}
                        placeholder="Enter field to search"
                    />
                </label>
                <label>
                    Text:
                    <input
                        type="text"
                        value={searchParams.searchText || ''}
                        onChange={handleTextChange}
                        placeholder="Enter text to search"
                    />
                </label>
                <label>
                    Limit:
                    <input
                        type="number"
                        value={searchParams.limit}
                        onChange={handleLimitChange}
                    />
                </label>
            </div>

            {isLoading && <p>Searching...</p>}

            {error && <p>Error: {error.message}</p>}

            {!isLoading && searchResults && (
                <div>
                    <h2>Results</h2>
                    {searchResults.map((result, index) => (
                        <pre key={index}>{JSON.stringify(result, null, 2)}</pre>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
