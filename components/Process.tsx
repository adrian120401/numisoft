'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.08,
    });

    const steps = [
        {
            icon: '/process/analysis.svg',
            name: 'Analisis',
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
            name: 'Entrega y soporte',
            description:
                'Entregamos la solución y brindamos soporte continuo para garantizar su correcto funcionamiento',
        },
    ];

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center py-8"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Nuesto proceso</h2>
            <div className="grid px-4 sm:grid-cols-4 gap-4 py-8 max-w-7xl mx-auto">
                {steps.map((step, index) => (
                    <div key={index} className="text-center flex flex-col items-center">
                        <Image src={step.icon} width={50} height={50} alt="Icono del servicio" />
                        <div className="text-xl font-bold mt-3">{step.name}</div>
                        <div className="text-lg">{step.description}</div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Process;
