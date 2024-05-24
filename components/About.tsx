import Image from 'next/image';

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center py-8 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-center">Sobre nosotros</h2>
            <div className="flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 relative">
                <div className='mt-2 md:relative md:mr-[-50px] bg-gray-100 rounded-tr-3xl p-4'>
                    <h3 className="text-xl font-bold mb-4 text-center">numisoft</h3>
                    <p className="text-lg">
                        Somos una empresa de desarrollo de software con más de 10 años de
                        experiencia en el mercado. Nuestro equipo de profesionales está altamente
                        capacitado para desarrollar aplicaciones web y móviles que se ajusten a tus
                        necesidades.
                    </p>
                </div>
                <Image src="/about.svg" width={400} height={400} alt="Sobre nosotros" />
            </div>
        </div>
    );
};

export default About;
