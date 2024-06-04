import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <div className="mt-24 px-4 text-center flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Sobre nosotros</h2>
            <p className="text-lg">
                En numisoft, nuestra pasión es transformar negocios a través de soluciones de
                software innovadoras. Con un equipo experimentado y dedicado, nos esforzamos por
                impulsar el crecimiento y la eficiencia de cada empresa mediante la tecnología. Aquí
                hay más detalles sobre nuestra visión y valores:
            </p>
            <ul className="text-base list-disc px-8 text-start mt-2">
                <li>
                    Innovación Constante: Creemos que la tecnología es un motor de cambio. Por eso,
                    nos mantenemos al día con las últimas tendencias y herramientas para ofrecer
                    soluciones vanguardistas. Desde aplicaciones móviles hasta sistemas de gestión
                    empresarial, estamos comprometidos con la innovación constante.
                </li>
                <li className='mt-2'>
                    Optimización Empresarial: Nuestro objetivo es simplificar y mejorar los procesos
                    internos de tu empresa. Trabajamos en estrecha colaboración con nuestros
                    clientes para comprender sus necesidades específicas y diseñar soluciones
                    personalizadas. Ya sea automatizando tareas repetitivas o mejorando la
                    comunicación interna, estamos aquí para ayudarte a optimizar tus operaciones.
                </li>
                <li className='mt-2'>
                    Impacto Positivo: Creemos que la tecnología debe tener un propósito más allá de
                    la eficiencia. Buscamos generar un impacto positivo en la sociedad y el medio
                    ambiente. Al colaborar con nosotros, no solo obtendrás soluciones tecnológicas,
                    sino también una asociación comprometida con valores éticos y sostenibles.
                </li>
                <li className='mt-2'>
                    Clientes como Socios: No somos solo proveedores de software; somos socios de
                    nuestros clientes. Nos involucramos activamente en tus objetivos comerciales y
                    te apoyamos en cada paso del camino. Tu éxito es nuestro éxito, y trabajamos
                    arduamente para asegurarnos de que alcances tus metas.
                </li>
                <li className='mt-2'>
                    Transparencia y Confianza: Valoramos la transparencia en todas nuestras
                    interacciones. Desde la planificación hasta la implementación, te mantendremos
                    informado y seremos honestos sobre los desafíos y oportunidades. La confianza es
                    fundamental para construir relaciones duraderas.
                </li>
            </ul>
            <p className="text-lg mt-2">
                En resumen, en Numisoft, no solo creamos software; creamos soluciones que
                transforman empresas. Siempre estamos listos para enfrentar nuevos desafíos y
                ayudarte a alcanzar tus objetivos. ¡Únete a nosotros en este emocionante viaje
                tecnológico! 🚀
            </p>
            <h3 className="text-xl font-semibold mt-4 text-center">Seguinos en nuestras redes:</h3>
            <div className="flex items-center mt-2 mb-4">
                <Link href={''}>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="mr-2 hover:scale-105"
                    />
                </Link>
                <Link href={'https://www.facebook.com/numisoft/'} target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:scale-105 ml-2" />
                </Link>
            </div>
        </div>
    );
}
