import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaLightbulb, FaChartLine, FaHandshake, FaUsers, FaLeaf } from 'react-icons/fa';

const ValueCard = ({ icon, title, description }: { icon: React.ReactElement, title: string, description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center mb-4">
            <div className="text-blue-500 mr-4 text-3xl">{icon}</div>
            <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default function About() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white py-16 mt-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Sobre Numisoft</h1>
                
{/*                 <div className="mb-12 text-center">
                    <Image 
                        src="/team-photo.jpg" 
                        alt="Equipo Numisoft" 
                        width={800} 
                        height={400} 
                        className="rounded-lg shadow-xl mx-auto"
                    />
                </div> */}

                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
                    En Numisoft, nuestra pasión es transformar negocios a través de soluciones de software innovadoras. 
                    Con un equipo experimentado y dedicado, nos esforzamos por impulsar el crecimiento y la eficiencia 
                    de cada empresa mediante la tecnología de vanguardia.
                </p>

                <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Nuestros Valores</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <ValueCard 
                        icon={<FaLightbulb />}
                        title="Innovación Constante"
                        description="Nos mantenemos al día con las últimas tendencias tecnológicas para ofrecer soluciones vanguardistas."
                    />
                    <ValueCard 
                        icon={<FaChartLine />}
                        title="Optimización Empresarial"
                        description="Diseñamos soluciones personalizadas para mejorar y simplificar los procesos internos de tu empresa."
                    />
                    <ValueCard 
                        icon={<FaLeaf />}
                        title="Impacto Positivo"
                        description="Buscamos generar un impacto positivo en la sociedad y el medio ambiente a través de la tecnología."
                    />
                    <ValueCard 
                        icon={<FaUsers />}
                        title="Clientes como Socios"
                        description="Nos involucramos activamente en tus objetivos comerciales, considerándote un socio, no solo un cliente."
                    />
                    <ValueCard 
                        icon={<FaHandshake />}
                        title="Transparencia y Confianza"
                        description="Valoramos la honestidad en todas nuestras interacciones, construyendo relaciones duraderas basadas en la confianza."
                    />
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-700">Conéctate con Numisoft</h3>
                    <div className="flex justify-center space-x-6">
                        <Link target="_blank" href="https://www.instagram.com/numisoft_" className="text-blue-600 hover:text-blue-800 transition-colors">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </Link>
                        <Link target="_blank" href="https://www.facebook.com/numisoft/" className="text-blue-600 hover:text-blue-800 transition-colors">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </Link>
{/*                         <Link target="_blank" href="https://www.linkedin.com/company/numisoft" className="text-blue-600 hover:text-blue-800 transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}