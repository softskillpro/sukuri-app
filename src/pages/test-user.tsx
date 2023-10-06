import { useState } from 'react';
import { api } from '@/utils/api';
import { z } from 'zod';

const GetInput = z.object({
    id: z.string().optional(),
    sortBy: z.string().optional(),
    asc: z.boolean().optional().default(true),
});

/**
 * This is a test page for project operations, including:
 * - Creating a project
 * - Fetching a project by ID
 * - Updating a project
 * - Deleting a project
 * It was assisted by ChatGPT from OpenAI.
 */


const TestUserPage: React.FC = () => {
    const [userId, setUserId] = useState<string|undefined>("af7d39af-84a9-4a4b-b6a2-18563e42bc6e");

    // Define mutations and queries using tRPC hooks
    const createUserMutation = api.user.create.useMutation();
    const getUserQuery = api.user.get.useQuery({ id: userId });
    const updateUserMutation = api.user.update.useMutation();
    const deleteUserMutation = api.user.delete.useMutation();

    const createProject = async () => {
        try {
            const newUser = await createUserMutation.mutateAsync({
                name: 'Test User2',
                username: 'ajones123',
                address: '0x8D4583655cC7A5B36EE3abe3747176b42b698ec4',
                email: 'tester@gmail.com'
            });
            setUserId(newUser.id); // Assuming the new project object has an id property
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    const updateProject = async () => {
        if (!userId) {
            console.error('Project ID not set');
            return;
        }

        try {
            await updateUserMutation.mutate({
                id: userId,
                data: {
                    name: 'Test User2 - Update',
                    username: 'ajones123',
                    address: '0x8D4583655cC7A5B36EE3abe3747176b42b698ec4',
                    email: 'tester@gmail.com'
                },
            });
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    const deleteProject = async () => {
        if (!userId) {
            console.error('Project ID not set');
            return;
        }

        try {
            await deleteUserMutation.mutate(userId);
            setUserId(undefined); // Reset projectId after deletion
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const { data: user, status } = getUserQuery;
    const userData = Array.isArray(user) ? user[0] : user;
    return (
        <>
            <button onClick={createProject}>Create Project</button>
            <button onClick={() => setUserId(userId)}>Get Project</button>
            <button onClick={updateProject}>Update Project</button>
            <button onClick={deleteProject}>Delete Project</button>
            {status === 'success' && userData && (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userData.name}</p>
                    <p>Username: {userData.username}</p>
                    <p>Emal: {userData.email}</p>
                </div>
            )}
        </>
    );
};

export default TestUserPage;
