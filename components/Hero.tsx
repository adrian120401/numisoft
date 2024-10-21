'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        className="flex flex-col justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-800">
                            Innovación Tecnológica para tu Negocio
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-6">
                            Transformamos ideas en soluciones digitales que impulsan el crecimiento
                            de tu empresa
                        </p>
                        <motion.div
                            className="mt-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={'/contact'}
                                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg inline-block"
                            >
                                Inicia tu Transformación
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mt-8 md:mt-0"
                    >
                        <Image
                            src="/hero2.svg"
                            width={600}
                            height={600}
                            alt="Innovación Tecnológica"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
