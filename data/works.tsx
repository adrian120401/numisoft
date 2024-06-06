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
        <ul className="list-disc pl-5 mb-4">
            <li>Mapas Interactivos: Permiten a los usuarios explorar las rutas de la carrera de manera dinámica y atractiva.</li>
            <li>Perfiles de Elevación: Proporcionan detalles sobre el terreno de la carrera, ayudando a los corredores a prepararse para los desafíos.</li>
            <li>Información en Tiempo Real: Muestra datos actualizados de los corredores, fortaleciendo la conexión entre participantes y espectadores.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">Detalles Técnicos</h3>
        <ul className="list-disc pl-5 mb-4">
            <li><strong>Node.js:</strong> Asegura un rendimiento y velocidad óptimos en el lado del servidor.</li>
            <li><strong>Vite:</strong> Herramienta de construcción rápida para el frontend, optimizando la interfaz de usuario.</li>
            <li><strong>Bootstrap:</strong> Integración perfecta para una apariencia visual mejorada y una experiencia de usuario amigable.</li>
            <li><strong>React-Leaflet:</strong> Proporciona una experiencia de mapeo dinámica para la navegación y exploración de las rutas de la carrera.</li>
            <li><strong>Base de datos MySQL:</strong> Gestiona de manera eficiente la información crucial sobre los corredores, rutas y detalles de la carrera, garantizando un almacenamiento de datos robusto y seguro.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">¿Por qué Elegirnos?</h3>
        <p>
            Fui seleccionado para desarrollar esta aplicación por mi capacidad para comprender el entorno, mi adaptabilidad para desarrollar una aplicación enfocada en los requisitos del cliente basados en sus tecnologías, y mi entusiasmo por siempre ir más allá del entregable mínimo.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">Explora el Proyecto</h3>
        <p>
            Descubre la sofisticación técnica detrás de La Misión Tracker y observa cómo transforma la experiencia de las carreras de trail. Sumérgete en el código, analiza las tecnologías y aprecia la meticulosa artesanía que define La Misión Tracker.
        </p>
    </div>
);

export const projects: Project[] = [
    {
        id: '1',
        title: 'La Misión',
        description:
        'Plataforma interactiva para el seguimiento y la visualización de la carrera La Misión en Argentina, ofreciendo una experiencia de usuario dinámica y envolvente.',
        image: '/projects/lamision-insc.png',
        images: ['/projects/lamision-insc.png'],
        content: <LaMisionContent />,
    },
/*     {
        id: '2',
        title: 'La Misión 2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, justo ac lacinia ullamcorper, nunc nisl fringilla lectus, vitae consectetur nunc elit sed nisi.',
        image: '/projects/lamision-insc.png',
        images: ['/projects/lamision-insc.png'],
    }, */
/*     {
        id: '3',
        title: 'Cafe CAI',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, justo ac lacinia ullamcorper, nunc nisl fringilla lectus, vitae consectetur nunc elit sed nisi.',
        image: '/projects/lamision-insc.png',
        images: ['/projects/lamision-insc.png'],
    }, */
];
