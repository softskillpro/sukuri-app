import { useState } from 'react';
import { api } from '@/utils/api';

/**
 * This is a test page for project operations, including:
 * - Creating a project
 * - Fetching a project by ID
 * - Updating a project
 * - Deleting a project
 * It was assisted by ChatGPT from OpenAI.
 */
const TestProjectPage: React.FC = () => {
  const [projectId, setProjectId] = useState('');
  const [fetchProjectId, setFetchProjectId] = useState<string | null>(null);

  const createProjectMutation = api.project.create.useMutation();
  const updateProjectMutation = api.project.update.useMutation();
  const deleteProjectMutation = api.project.delete.useMutation();
  const getProjectQuery = api.project.get.useQuery(fetchProjectId || '');

  const createProject = async () => {
    const newProject = await createProjectMutation.mutateAsync({
      name: 'Test Project',
      short_description: 'A short description',
      long_description: 'A longer description',
      chain_id: 1234,
      is_erc721: false,
    });
    setProjectId(newProject.id);
  };

  const updateProject = async () => {
    if (!projectId) {
      console.error('Project ID not set');
      return;
    }

    await updateProjectMutation.mutateAsync({
      id: projectId,
      data: {
        name: 'Updated Project',
        short_description: 'Updated short description',
        long_description: 'Updated longer description',
        chain_id: 5678,
        is_erc721: true,
      },
    });
  };

  const deleteProject = async () => {
    if (!projectId) {
      console.error('Project ID not set');
      return;
    }

    await deleteProjectMutation.mutateAsync(projectId);
    setProjectId('');
    setFetchProjectId(null);
  };

  const getProject = () => {
    if (!projectId) {
      console.error('Project ID not set');
      return;
    }

    setFetchProjectId(projectId);
  };

  const { data: project, status } = getProjectQuery;

  return (
    <>
      <button onClick={createProject}>Create Project</button>
      <button onClick={getProject}>Get Project</button>
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
