'use client';
import { projects } from '@/data/works';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects: React.FC = () => {
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
                    Nuestros Proyectos
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
                >
                    Descubre algunos de los proyectos innovadores que hemos desarrollado para
                    nuestros clientes.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.slice(0, 6).map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={500}
                                className="!w-full !h-64 object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300"
                            >
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-sm mb-4">{project.description}</p>
                                    <Link
                                        href={`/works/${project.id}`}
                                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                                    >
                                        Ver más
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div variants={itemVariants} className="text-center">
                    <Link
                        href="/works"
                        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
                    >
                        Ver todos los proyectos
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;
