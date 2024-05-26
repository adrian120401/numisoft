import Image from 'next/image';

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Sobre nosotros</h2>
            <div className="flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 relative max-w-7xl">
                <div className="mt-2 md:relative md:mr-[-50px] md:bg-gray-100 rounded-tr-3xl p-4">
                    <p className="text-lg">
                        En numisoft, nos dedicamos a desarrollar soluciones de software que
                        transforman negocios. Nuestro objetivo es generar un impacto positivo,
                        ayudando a nuestros clientes a optimizar sus procesos, reducir tiempos y
                        atraer más clientes. Con un equipo apasionado y experimentado, nos
                        comprometemos a impulsar el crecimiento y la eficiencia de cada negocio
                        mediante la tecnología.
                    </p>
                </div>
                <Image src="/about.svg" width={400} height={400} alt="Sobre nosotros" />
            </div>
        </div>
    );
};

export default About;
