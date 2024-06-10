import { ReactElement } from 'react';

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    content?: ReactElement;
    images: string[];
}

const LaMisionContent = () => (
    <div className="p-4 bg-gray-100 text-lg rounded-lg shadow-md px-6">
        <p>
            La Misión Tracker es una plataforma diseñada para el seguimiento y la visualización de la carrera de trail La Misión en Argentina. Esta aplicación fue desarrollada para proporcionar una experiencia de usuario fluida y atractiva, adaptándose a las necesidades específicas del cliente.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-8">Características Destacadas</h3>
        <ul className="list-disc px-4 mb-4">
            <li>Mapas Interactivos: Permiten a los usuarios explorar las rutas de la carrera de manera dinámica y atractiva.</li>
            <li>Perfiles de Elevación: Proporcionan detalles sobre el terreno de la carrera, ayudando a los corredores a prepararse para los desafíos.</li>
            <li>Información en Tiempo Real: Muestra datos actualizados de los corredores, fortaleciendo la conexión entre participantes y espectadores.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">Detalles Técnicos</h3>
        <ul className="list-disc px-4 mb-4">
            <li><strong>Node.js:</strong> Asegura un rendimiento y velocidad óptimos en el lado del servidor.</li>
            <li><strong>Vite:</strong> Herramienta de construcción rápida para el frontend, optimizando la interfaz de usuario.</li>
            <li><strong>Bootstrap:</strong> Integración perfecta para una apariencia visual mejorada y una experiencia de usuario amigable.</li>
            <li><strong>React-Leaflet:</strong> Proporciona una experiencia de mapeo dinámica para la navegación y exploración de las rutas de la carrera.</li>
            <li><strong>Base de datos MySQL:</strong> Gestiona de manera eficiente la información crucial sobre los corredores, rutas y detalles de la carrera, garantizando un almacenamiento de datos robusto y seguro.</li>
        </ul>
    </div>
);

const LaMisionInscriptionContent = () => (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <p>
            El sistema de inscripciones de La Misión está diseñado para simplificar el proceso de registro a la carrera de trail La Misión en Argentina. Con un enfoque en la facilidad de uso y la seguridad, esta plataforma garantiza una experiencia de inscripción fluida y sin complicaciones.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">Características Destacadas</h3>
        <ul className="list-disc px-4 mb-4">
            <li>Inicio de Sesión y Registro Seguro: Funcionalidades completas de inicio de sesión y registro, con validaciones y opciones de recuperación de contraseña.</li>
            <li>Integraciones de Pago: Soporte para múltiples métodos de pago, incluyendo PayPal y Mercado Pago, ofreciendo opciones flexibles para los usuarios.</li>
            <li>Notificaciones por Email Automáticas: Envío automático de correos electrónicos para diversas acciones, mejorando la comunicación y el compromiso del usuario.</li>
            <li>Interfaz Amigable: Diseño intuitivo que asegura un proceso de registro sencillo, facilitando la inscripción de los participantes.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">Detalles Técnicos</h3>
        <ul className="list-disc px-4 mb-4">
            <li><strong>React con Vite:</strong> El frontend está construido con React y Vite, proporcionando una interfaz de usuario rápida y responsiva.</li>
            <li><strong>Node.js con Express:</strong> El backend está potenciado por Node.js y Express, ofreciendo un marco robusto para manejar diversas funcionalidades del servidor.</li>
            <li><strong>MySQL:</strong> Un sistema de bases de datos confiable que gestiona eficientemente los datos de los usuarios, detalles de inscripción y registros de pagos.</li>
        </ul>
    </div>
);

export const projects: Project[] = [
    {
        id: '1',
        title: 'La Misión',
        description:
        'Plataforma interactiva para el seguimiento y la visualización de la carrera La Misión en Argentina, ofreciendo una experiencia de usuario dinámica y envolvente.',
        image: '/projects/lamision.png',
        images: ['/projects/lamision.png'],
        content: <LaMisionContent />,
    },
    {
        id: '2',
        title: 'La Misión Inscripciones',
        description:
            'Sistema robusto y fácil de usar para la inscripción a la carrera de La Misión en Argentina, simplificando el proceso de registro para los participantes.',
        image: '/projects/lamision-insc.png',
        images: ['/projects/lamision-insc.png'],
        content: <LaMisionInscriptionContent />,
    },
/*     {
        id: '3',
        title: 'Cafe CAI',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, justo ac lacinia ullamcorper, nunc nisl fringilla lectus, vitae consectetur nunc elit sed nisi.',
        image: '/projects/lamision-insc.png',
        images: ['/projects/lamision-insc.png'],
    }, */
];
