import { useRouter } from 'next/router';
import { api } from '@/utils/api';

const ProjectPage: React.FC = () => {
    const router = useRouter();
    const { projectId } = router.query;

    // Ensure projectId is a string before fetching the project
    if (typeof projectId !== 'string') {
        return <div>Loading...</div>;
    }

    const projectQuery = api.project.get.useQuery(projectId);

    if (projectQuery.status === 'loading') {
        return <div>Loading...</div>;
    }

    if (projectQuery.status === 'error') {
        return <div>Error: {projectQuery.error?.message}</div>;
    }

    const project = projectQuery.data;

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.short_description}</p>
            <p>{project.long_description}</p>
            {/* Render other project properties as needed */}
        </div>
    );
}

export default ProjectPage;
