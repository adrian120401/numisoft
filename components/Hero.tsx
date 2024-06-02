import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Lleva tu negocio al próximo nivel
                        </h1>
                        <p className="text-gray-600 text-lg sm:text-xl mb-4">
                            Te aydudamos a mejorar el rendimiento y los procesos de tu negocio con
                            software
                        </p>
                        <div className="mt-8">
                            <Link
                                href={'/contact'}
                                className="px-4 py-3 bg-slate-700 text-white rounded hover:bg-slate-800 text-xl sm:text-2xl"
                            >
                                Comenzar!
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/hero2.svg"
                            width={100}
                            height={100}
                            alt="Imagen del Hero"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
