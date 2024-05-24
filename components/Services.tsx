'use client';
import CardService from './CardService';
import { Service } from '@/types/Service';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services: Service[] = [
    {
        title: 'Paginas web',
        description:
            'Creamos sitios web personalizados y optimizados que reflejan la identidad de tu marca y mejoran la experiencia del usuario. Nuestro enfoque se centra en el diseño responsive, la funcionalidad intuitiva y la optimización SEO para asegurar que tu presencia en línea sea atractiva y efectiva.',
        icon: '/services/web.svg',
    },
    {
        title: 'Soluciones Empresariales',
        description:
            'Desarrollamos software a medida para satisfacer las necesidades específicas de tu negocio. Desde sistemas de gestión hasta aplicaciones móviles, nuestras soluciones empresariales están diseñadas para mejorar la eficiencia operativa, aumentar la productividad y facilitar la toma de decisiones informadas.',
        icon: '/services/web.svg',
    },
    {
        title: 'Aplicaciones Móviles',
        description:
            'Creamos aplicaciones móviles nativas e híbridas que ofrecen una experiencia de usuario excepcional en dispositivos iOS y Android. Nuestro equipo de desarrolladores de aplicaciones móviles trabaja en estrecha colaboración contigo para garantizar que tu aplicación cumpla con tus expectativas y las de tus usuarios.',
        icon: '/services/web.svg',
    },
];
const Services: React.FC = () => {
    const [slider, setSlider] = useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
        config: config.gentle,
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

    return (
        <div className="flex flex-col items-center py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Servicios que ofrecemos</h2>
            <div className="flex flex-col sm:h-96 h-[30rem] w-[90%]">
                <Carousel
                    slides={slides}
                    goToSlide={slider.goToSlide}
                    offsetRadius={slider.offsetRadius}
                    animationConfig={slider.config}
                    showNavigation={slider.showNavigation}
                />
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
        </div>
    );
};

export default Services;
