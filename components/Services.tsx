'use client';
import CardService from './CardService';
import { config } from 'react-spring';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
/* import { useDrag } from 'react-use-gesture'
 */
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
        threshold: 0.08,
    });

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                    setSlider({ ...slider, goToSlide: slider.goToSlide - 1 });
                    break;
                case 'ArrowRight':
                    setSlider({ ...slider, goToSlide: slider.goToSlide + 1 });
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [slider]);

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

    /*     const bind = useDrag(({ direction: [xDir], down, velocity }) => {
        if (down && velocity > 0.4) {
          setSlider(prevSlider => ({
            ...prevSlider,
            goToSlide: prevSlider.goToSlide + (xDir > 0 ? -1 : 1),
          }))
        }
      }) */

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center py-8"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Servicios que ofrecemos</h2>
            <div className="flex flex-col sm:h-96 h-[30rem] w-[80%]">
                <div className="h-full w-full py-8" /* {...bind()} */>
                    <Carousel
                        slides={slides}
                        goToSlide={slider.goToSlide}
                        offsetRadius={slider.offsetRadius}
                        animationConfig={slider.config}
                        showNavigation={slider.showNavigation}
                    />
                </div>
                <div className="text-center">
                    <button
                        onClick={() => {
                            setSlider({ ...slider, goToSlide: slider.goToSlide - 1 });
                        }}
                        className="mr-6"
                    >
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            size="2x"
                            color="gray"
                            className="hover:scale-110"
                        />
                    </button>
                    <button
                        onClick={() => {
                            setSlider({ ...slider, goToSlide: slider.goToSlide + 1 });
                        }}
                        className="ml-6"
                    >
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size="2x"
                            color="gray"
                            className="hover:scale-110"
                        />
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

export default Services;
