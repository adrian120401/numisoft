import { Service } from '@/types/Service';

const ContentComponent = ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">{children}</div>
);

const WebContent = () => (
    <ContentComponent>
        <h3 className="text-lg font-semibold mb-2">Nuestro enfoque incluye:</h3>
        <ul className="list-disc pl-5 mb-4">
            <li>
                Diseño Responsive: Aseguramos que tu sitio web se vea y funcione perfectamente en
                cualquier dispositivo.
            </li>
            <li>
                Funcionalidad Intuitiva: Diseñamos interfaces fáciles de usar que guían a los
                usuarios hacia la información que buscan.
            </li>
            <li>
                Optimización SEO: Implementamos técnicas de SEO para mejorar la visibilidad de tu
                sitio en los motores de búsqueda.
            </li>
        </ul>
        <h4 className="text-md font-semibold mb-2">Características adicionales:</h4>
        <ul className="list-disc pl-5 mb-4">
            <li>Integración con plataformas de e-commerce</li>
            <li>Sistemas de gestión de contenido (CMS) personalizados</li>
            <li>Implementación de seguridad avanzada</li>
            <li>Soporte y mantenimiento continuo</li>
        </ul>
    </ContentComponent>
);

const BusinessContent = () => (
    <ContentComponent>
        <h3 className="text-lg font-semibold mb-2">Nuestras soluciones empresariales incluyen:</h3>
        <ul className="list-disc pl-5 mb-4">
            <li>Sistemas de gestión: ERP, CRM, y otros sistemas personalizados para optimizar tus operaciones.</li>
            <li>Aplicaciones móviles empresariales: Herramientas que permiten a tus empleados trabajar de manera más eficiente, incluso en movimiento.</li>
            <li>Integración de datos: Conectamos tus diferentes sistemas para que compartan información de manera fluida.</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">Beneficios adicionales:</h4>
        <ul className="list-disc pl-5 mb-4">
            <li>Mejora de la eficiencia operativa: Automatización de procesos repetitivos para ahorrar tiempo y recursos.</li>
            <li>Aumento de la productividad: Herramientas diseñadas para facilitar el trabajo diario de tus empleados.</li>
            <li>Toma de decisiones informadas: Análisis de datos y reportes que proporcionan información valiosa.</li>
        </ul>
    </ContentComponent>
);

const MobileContent = () => (
    <ContentComponent>
        <h3 className="text-lg font-semibold mb-2">Nuestro proceso incluye:</h3>
        <ul className="list-disc pl-5 mb-4">
            <li>Diseño centrado en el usuario: Interfaces intuitivas y atractivas que encantan a los usuarios.</li>
            <li>Desarrollo nativo y multiplataforma: Aplicaciones que aprovechan al máximo las capacidades de cada plataforma.</li>
            <li>Pruebas exhaustivas: Aseguramos la calidad y el rendimiento de tu aplicación a través de pruebas rigurosas.</li>
        </ul>
        <h4 className="text-md font-semibold mb-2">Beneficios adicionales:</h4>
        <ul className="list-disc pl-5 mb-4">
            <li>Experiencia de usuario excepcional: Interfaces diseñadas para ser atractivas y fáciles de usar.</li>
            <li>Alto rendimiento: Aplicaciones rápidas y eficientes.</li>
            <li>Compatibilidad multiplataforma: Desarrollamos aplicaciones que funcionan sin problemas en iOS y Android.</li>
        </ul>
    </ContentComponent>
);

export const services: Service[] = [
    {
        title: 'Paginas web',
        description:
            'Creamos sitios web personalizados y optimizados que reflejan la identidad de tu marca y mejoran la experiencia del usuario. Nuestro enfoque se centra en el diseño responsive, la funcionalidad intuitiva y la optimización SEO para asegurar que tu presencia en línea sea atractiva y efectiva.',
        icon: '/services/web.svg',
        content: <WebContent />,
    },
    {
        title: 'Soluciones Empresariales',
        description:
            'Desarrollamos software a medida para satisfacer las necesidades específicas de tu negocio. Desde sistemas de gestión hasta aplicaciones móviles, nuestras soluciones empresariales están diseñadas para mejorar la eficiencia operativa, aumentar la productividad y facilitar la toma de decisiones informadas.',
        icon: '/services/business.svg',
        content: <BusinessContent />,
    },
    {
        title: 'Aplicaciones Móviles',
        description:
            'Creamos aplicaciones móviles nativas e híbridas que ofrecen una experiencia de usuario excepcional en dispositivos iOS y Android. Nuestro equipo de desarrolladores de aplicaciones móviles trabaja en estrecha colaboración contigo para garantizar que tu aplicación cumpla con tus expectativas y las de tus usuarios.',
        icon: '/services/apps.svg',
        content: <MobileContent />,
    },
];


