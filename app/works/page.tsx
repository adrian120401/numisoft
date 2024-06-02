import { projects } from '@/data/works';
import CardProject from '@/components/CardProject';

export default function Works() {
    return (
        <div className="mt-24 px-4">
            <h1 className="text-3xl font-bold text-center">Trabajos</h1>
            <div className="flex flex-col items-center mt-4">
                {projects.map((project, index) => (
                    <div key={index} className="mb-4">
                        <CardProject
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            className=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
