'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const steps = [
        {
            icon: '/process/analysis.svg',
            name: 'Análisis',
            description:
                'Analizamos tus necesidades y requerimientos para ofrecerte la mejor solución',
        },
        {
            icon: '/process/dev.svg',
            name: 'Desarrollo',
            description:
                'Desarrollamos la solución a la medida de tus necesidades y requerimientos',
        },
        {
            icon: '/process/test.svg',
            name: 'Pruebas',
            description:
                'Realizamos pruebas exhaustivas para garantizar el correcto funcionamiento de la solución',
        },
        {
            icon: '/process/finish.svg',
            name: 'Entrega y Soporte',
            description:
                'Entregamos la solución y brindamos soporte continuo para garantizar su correcto funcionamiento',
        },
    ];

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
                    Nuestro Proceso
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
                >
                    Seguimos un proceso estructurado para asegurar el éxito de cada proyecto
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="bg-blue-100 p-4 rounded-full mb-4">
                                <Image
                                    src={step.icon}
                                    width={50}
                                    height={50}
                                    alt={`Icono de ${step.name}`}
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-blue-700">{step.name}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Process;
