import { useState } from 'react';
import { api } from '@/utils/api';
import {z} from 'zod';

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


const TestProjectPage: React.FC = () => {
  const [projectId, setProjectId] = useState<string | undefined>(undefined);

  // Define mutations and queries using tRPC hooks
  const createProjectMutation = api.project.create.useMutation();
  const getProjectQuery = api.project.get.useQuery({ id: projectId });
  const updateProjectMutation = api.project.update.useMutation();
  const deleteProjectMutation = api.project.delete.useMutation();

  const createProject = async () => {
    try {
      const newProject = await createProjectMutation.mutateAsync({
        name: 'Test Project2',
        short_description: 'A short description',
        long_description: 'A longer description',
        chain_id: 1234,
        is_erc721: false,
      });
      setProjectId(newProject.id); // Assuming the new project object has an id property
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const updateProject = async () => {
    if (!projectId) {
      console.error('Project ID not set');
      return;
    }

    try {
      await updateProjectMutation.mutate({
        id: projectId,
        data: {
          name: 'Updated Project',
          short_description: 'Updated short description',
          long_description: 'Updated longer description',
          chain_id: 5678,
          is_erc721: true,
        },
      });
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const deleteProject = async () => {
    if (!projectId) {
      console.error('Project ID not set');
      return;
    }

    try {
      await deleteProjectMutation.mutate(projectId);
      setProjectId(undefined); // Reset projectId after deletion
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const { data: project, status } = getProjectQuery;

  return (
    <>
      <button onClick={createProject}>Create Project</button>
      <button onClick={() => setProjectId(projectId)}>Get Project</button>
      <button onClick={updateProject}>Update Project</button>
      <button onClick={deleteProject}>Delete Project</button>
      {status === 'success' && project && (
        <div>
          <h2>Project Details</h2>
          <p>Name: {project.name}</p>
          <p>Short Description: {project.short_description}</p>
          <p>Long Description: {project.long_description}</p>
          <p>Chain ID: {project.chain_id}</p>
          <p>Is ERC721: {project.is_erc721 ? 'Yes' : 'No'}</p>
        </div>
      )}
    </>
  );
};

export default TestProjectPage;
