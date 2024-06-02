'use client';
import CardProject from './CardProject';
import { projects } from '@/data/works';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from '@/components/Carousel/Carousel';

const OPTIONS: EmblaOptionsType = { loop: true };

const Project: React.FC = () => {
    const SLIDES = projects.map((project, index) => (
        <div key={project.id} className='p-1'>
            <CardProject
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
            />
        </div>
    ));

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Algunos trabajos</h2>
            <div className="w-full h-full">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </section>
    );
};

export default Project;
