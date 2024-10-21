import { Service } from '@/types/Service';
import { FaCheckCircle } from 'react-icons/fa';

const ContentComponent = ({
    title,
    items,
    benefits,
}: {
    title: string;
    items: string[];
    benefits: string[];
}) => (
    <div className="text-sm">
        <h3 className="text-lg font-semibold mb-3 text-blue-700">{title}</h3>
        <ul className="space-y-2 mb-4">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
        <h4 className="text-md font-semibold mb-2 text-blue-600">Beneficios adicionales:</h4>
        <ul className="space-y-2">
            {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                </li>
            ))}
        </ul>
    </div>
);

const WebContent = () => (
    <ContentComponent
        title="Nuestro enfoque incluye:"
        items={[
            'Diseño Responsive: Sitios web perfectos en cualquier dispositivo.',
            'Funcionalidad Intuitiva: Interfaces que guían a los usuarios eficazmente.',
            'Optimización SEO: Mejora la visibilidad en motores de búsqueda.',
        ]}
        benefits={[
            'Integración con plataformas de e-commerce',
            'CMS personalizados para gestión de contenido',
            'Implementación de seguridad avanzada',
            'Soporte y mantenimiento continuo',
        ]}
    />
);

const BusinessContent = () => (
    <ContentComponent
        title="Nuestras soluciones empresariales incluyen:"
        items={[
            'Sistemas de gestión: ERP, CRM y sistemas personalizados.',
            'Aplicaciones móviles empresariales para eficiencia en movimiento.',
            'Integración de datos para flujo de información sin problemas.',
        ]}
        benefits={[
            'Mejora de la eficiencia operativa mediante automatización',
            'Aumento de la productividad con herramientas optimizadas',
            'Toma de decisiones informadas con análisis de datos avanzados',
        ]}
    />
);

const MobileContent = () => (
    <ContentComponent
        title="Nuestro proceso incluye:"
        items={[
            'Diseño centrado en el usuario: Interfaces intuitivas y atractivas.',
            'Desarrollo nativo y multiplataforma para máximo rendimiento.',
            'Pruebas exhaustivas para garantizar calidad y rendimiento.',
        ]}
        benefits={[
            'Experiencia de usuario excepcional con interfaces atractivas',
            'Alto rendimiento: Aplicaciones rápidas y eficientes',
            'Compatibilidad multiplataforma: Funcionamiento perfecto en iOS y Android',
        ]}
    />
);

export const services: Service[] = [
    {
        title: 'Páginas Web Impactantes',
        description:
            'Diseñamos y desarrollamos sitios web que no solo se ven increíbles, sino que también impulsan el crecimiento de tu negocio.',
        icon: '/services/web.svg',
        content: <WebContent />,
    },
    {
        title: 'Soluciones Empresariales Potentes',
        description:
            'Creamos software a medida que optimiza tus operaciones, aumenta la productividad y te da una ventaja competitiva.',
        icon: '/services/business.svg',
        content: <BusinessContent />,
    },
    {
        title: 'Aplicaciones Móviles Innovadoras',
        description:
            'Desarrollamos apps móviles que cautivan a tus usuarios y llevan tu negocio al siguiente nivel en la era digital.',
        icon: '/services/apps.svg',
        content: <MobileContent />,
    },
];
