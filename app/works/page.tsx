import { projects } from '@/data/works';
import CardProject from '@/components/CardProject';

export default function Works() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white py-16 mt-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
                    Nuestros Trabajos
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <CardProject
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
