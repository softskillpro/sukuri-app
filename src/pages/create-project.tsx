import { useState } from 'react';
import { api } from '@/utils/api';

const CreateProjectPage: React.FC = () => {
  const [name, setName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [chainId, setChainId] = useState(0);
  const [isErc721, setIsErc721] = useState(false);

  const createProjectMutation = api.project.create.useMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const newProject = await createProjectMutation.mutateAsync({
        name,
        short_description: shortDescription,
        long_description: longDescription,
        chain_id: chainId,
        is_erc721: isErc721,
      });

      alert(`Project created with ID: ${newProject.id}`);
    } catch (error) {
      alert(`Failed to create project: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label>
        Short Description:
        <input type="text" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required />
      </label>

      <label>
        Long Description:
        <textarea value={longDescription} onChange={(e) => setLongDescription(e.target.value)} required />
      </label>

      <label>
        Chain ID:
        <input type="number" value={chainId} onChange={(e) => setChainId(Number(e.target.value))} required />
      </label>

      <label>
        Is ERC721:
        <input type="checkbox" checked={isErc721} onChange={(e) => setIsErc721(e.target.checked)} />
      </label>

      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProjectPage;
