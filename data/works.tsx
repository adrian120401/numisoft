import { ReactElement } from 'react';
import { FaMapMarkedAlt, FaMountain, FaClock, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiVite, SiBootstrap, SiExpress, SiMysql } from 'react-icons/si';

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    content?: ReactElement;
    images: string[];
}

const FeatureCard = ({ icon, title, description }: { icon: ReactElement, title: string, description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
            <div className="text-blue-500 mr-4 text-3xl">{icon}</div>
            <h4 className="text-xl font-semibold text-blue-700">{title}</h4>
        </div>
        <p className="text-gray-600">{description}</p>
    </div>
);

const TechStack = ({ techs }: { techs: { icon: ReactElement, name: string }[] }) => (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
        {techs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
                <div className="text-4xl text-blue-500 mb-2">{tech.icon}</div>
                <span className="text-sm text-gray-600">{tech.name}</span>
            </div>
        ))}
    </div>
);

const LaMisionContent = () => (
    <div className="space-y-8">
        <p className="text-lg text-gray-700 leading-relaxed">
            La Misión Tracker es una plataforma innovadora diseñada para el seguimiento y la visualización de la carrera de trail La Misión en Argentina. Esta aplicación ofrece una experiencia de usuario fluida y atractiva, adaptándose perfectamente a las necesidades específicas del cliente y los participantes.
        </p>

        <h3 className="text-2xl font-bold text-blue-800 mb-4">Características Destacadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
                icon={<FaMapMarkedAlt />}
                title="Mapas Interactivos"
                description="Explora las rutas de la carrera de manera dinámica y atractiva."
            />
            <FeatureCard 
                icon={<FaMountain />}
                title="Perfiles de Elevación"
                description="Visualiza los detalles del terreno para una mejor preparación."
            />
            <FeatureCard 
                icon={<FaClock />}
                title="Información en Tiempo Real"
                description="Sigue a los corredores con datos actualizados al instante."
            />
        </div>

        <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Stack Tecnológico</h3>
        <TechStack techs={[
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiVite />, name: "Vite" },
            { icon: <SiBootstrap />, name: "Bootstrap" },
            { icon: <FaReact />, name: "React-Leaflet" },
            { icon: <SiMysql />, name: "MySQL" }
        ]} />
    </div>
);

const LaMisionInscriptionContent = () => (
    <div className="space-y-8">
        <p className="text-lg text-gray-700 leading-relaxed">
            El sistema de inscripciones de La Misión está diseñado para simplificar el proceso de registro a la carrera de trail La Misión en Argentina. Con un enfoque en la facilidad de uso y la seguridad, esta plataforma garantiza una experiencia de inscripción fluida y sin complicaciones.
        </p>

        <h3 className="text-2xl font-bold text-blue-800 mb-4">Características Destacadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
                icon={<FaReact />}
                title="Interfaz Intuitiva"
                description="Diseño amigable que facilita el proceso de inscripción."
            />
            <FeatureCard 
                icon={<FaDatabase />}
                title="Gestión de Datos Segura"
                description="Almacenamiento y manejo seguro de la información de los participantes."
            />
        </div>

        <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Stack Tecnológico</h3>
        <TechStack techs={[
            { icon: <FaReact />, name: "React" },
            { icon: <SiVite />, name: "Vite" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express" },
            { icon: <SiMysql />, name: "MySQL" }
        ]} />
    </div>
);

export const projects: Project[] = [
    {
        id: '1',
        title: 'La Misión',
        description: 'Plataforma interactiva para el seguimiento y la visualización de la carrera La Misión en Argentina, ofreciendo una experiencia de usuario dinámica y envolvente.',
        image: '/projects/lamision.png',
        images: ['/projects/lamision.png'],
        content: <LaMisionContent />,
    },
    {
        id: '2',
        title: 'La Misión Inscripciones',
        description: 'Sistema robusto y fácil de usar para la inscripción a la carrera de La Misión en Argentina, simplificando el proceso de registro para los participantes.',
        image: '/projects/lamision-insc.png',
        images: ['/projects/lamision-insc.png'],
        content: <LaMisionInscriptionContent />,
    },
];