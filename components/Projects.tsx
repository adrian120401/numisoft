'use client';
import CardProject from './CardProject';
import { projects } from '@/data/works';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Project: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.08,
    });

    const SLIDES = projects.map((project, index) => (
        <div key={project.id} className="px-8 text-start">
            <CardProject
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
            />
        </div>
    ));

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6 }}
            className="py-8"
        >
            <h2 className="text-2xl font-bold mb-8 text-center">Algunos trabajos</h2>
            <div className="w-full max-h-96 px-4">
                <Carousel infiniteLoop showStatus={false} showIndicators={false}>
                    {SLIDES}
                </Carousel>
            </div>
        </motion.section>
    );
};

export default Project;
