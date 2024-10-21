'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="py-16"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800"
                >
                    Sobre Numisoft
                </motion.h2>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div variants={itemVariants} className="md:w-1/2 mb-8 md:mb-0">
                        <Image
                            src="/about.svg"
                            width={500}
                            height={500}
                            alt="Sobre Numisoft"
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className="md:w-1/2 md:pl-8">
                        <p className="text-lg mb-6 text-gray-700">
                            En Numisoft, nos dedicamos a desarrollar soluciones de software
                            innovadoras que transforman negocios. Nuestro objetivo es generar un
                            impacto positivo, ayudando a nuestros clientes a optimizar sus procesos,
                            reducir tiempos y atraer más clientes.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col items-center text-center"
                            >
                                <FaRocket className="text-4xl text-blue-600 mb-2" />
                                <h3 className="font-semibold mb-1">Innovación</h3>
                                <p className="text-sm text-gray-600">Soluciones de vanguardia</p>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col items-center text-center"
                            >
                                <FaUsers className="text-4xl text-blue-600 mb-2" />
                                <h3 className="font-semibold mb-1">Equipo Experto</h3>
                                <p className="text-sm text-gray-600">Profesionales apasionados</p>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col items-center text-center"
                            >
                                <FaLightbulb className="text-4xl text-blue-600 mb-2" />
                                <h3 className="font-semibold mb-1">Soluciones a Medida</h3>
                                <p className="text-sm text-gray-600">Adaptadas a tu negocio</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
