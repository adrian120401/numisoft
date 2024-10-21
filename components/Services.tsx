'use client';
import CardService from './CardService';
import { config } from 'react-spring';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { services } from '@/data/services';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface CarouselProps {
    slides: any[];
    goToSlide: number;
    offsetRadius: number;
    showNavigation: boolean;
    animationConfig: any;
}

const Carousel: ComponentType<CarouselProps> = dynamic(
    () => import('react-spring-3d-carousel').then((mod) => mod.default || mod) as any,
    { ssr: false }
);

const Services: React.FC = () => {
    const [slider, setSlider] = useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
        config: config.gentle,
    });

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                setSlider(prev => ({ ...prev, goToSlide: prev.goToSlide - 1 }));
            } else if (event.key === 'ArrowRight') {
                setSlider(prev => ({ ...prev, goToSlide: prev.goToSlide + 1 }));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const slides = services.map((service, index) => ({
        key: index,
        content: (
            <CardService
                title={service.title}
                description={service.description}
                icon={service.icon}
            />
        ),
    }));

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="py-16"
        >
            <div className="container mx-auto px-4">
                <motion.h2 
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-800"
                >
                    Nuestros Servicios
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-center text-gray-600 mb-8 max-w-2xl mx-auto"
                >
                    Ofrecemos una amplia gama de soluciones tecnológicas para impulsar tu negocio al siguiente nivel.
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-col sm:h-96 h-[30rem] w-full max-w-4xl mx-auto">
                    <div className="h-full w-full py-8">
                        <Carousel
                            slides={slides}
                            goToSlide={slider.goToSlide}
                            offsetRadius={slider.offsetRadius}
                            animationConfig={slider.config}
                            showNavigation={slider.showNavigation}
                        />
                    </div>
                    <div className="flex justify-center space-x-8 mt-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSlider(prev => ({ ...prev, goToSlide: prev.goToSlide - 1 }))}
                            className="bg-blue-500 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSlider(prev => ({ ...prev, goToSlide: prev.goToSlide + 1 }))}
                            className="bg-blue-500 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
                        >
                            <FontAwesomeIcon icon={faArrowRight} size="lg" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Services;