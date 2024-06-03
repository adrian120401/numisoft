'use client'
import { projects } from '@/data/works';
import { redirect } from 'next/navigation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';

interface Params {
    id: string;
}

interface PostPageProps {
    params: Params;
}

export default function Work({ params }: PostPageProps) {
    const { id } = params;
    
    const project = projects.find((project) => project.id === id);
    
    if (!project) redirect('/works');
    
    const img = <Image src={project.image} alt={project.title} width={800} height={400} className='w-full md:px-8 pb-8'/>;

    const SLIDES = Array.from({ length: 4 }, () => img);

    return (
        <div className="mt-24 mx-auto md:max-w-[80%] md:px-4">
            <h1 className="text-center text-3xl font-bold mb-4">{project.title}</h1>
            <Carousel infiniteLoop showStatus={false}>
                {SLIDES}
            </Carousel>
            <p className="text-center text-lg mt-4">{project.description}</p>
        </div>
    );
}
