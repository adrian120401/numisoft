'use client';
import CardProject from './CardProject';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const projects = [
    {
        title: 'La Misión',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, justo ac lacinia ullamcorper, nunc nisl fringilla lectus, vitae consectetur nunc elit sed nisi.',
        image: '/projects/lamision-insc.png',
    },
    {
        title: 'La Misión 2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, justo ac lacinia ullamcorper, nunc nisl fringilla lectus, vitae consectetur nunc elit sed nisi.',
        image: '/projects/lamision-insc.png',
    },
    {
        title: 'Cafe CAI',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, justo ac lacinia ullamcorper, nunc nisl fringilla lectus, vitae consectetur nunc elit sed nisi.',
        image: '/projects/lamision-insc.png',
    },
];

const Project: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => setIndex((index + 1) % projects.length), 500);
        }
    };

    const handlePrev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => setIndex((index - 1 + projects.length) % projects.length), 500);
        }
    };

    useEffect(() => {
        if (isTransitioning) {
            const timeoutId = setTimeout(() => setIsTransitioning(false), 500);
            return () => clearTimeout(timeoutId);
        }
    }, [isTransitioning]);
    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Proyectos</h2>
            <div className="container mx-auto">
                <div className="w-full flex">
                    <button className="hover:text-gray-800 text-gray-600 px-4" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                    </button>
                    <CardProject
                        key={0}
                        title={projects[index].title}
                        description={projects[index].description}
                        image={projects[index].image}
                        className={isTransitioning ? 'transitioning' : ''}
                    />
                    <button className="hover:text-gray-800 text-gray-600 px-4" onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Project;
