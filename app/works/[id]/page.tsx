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
    
    const img = <Image src={project.image} alt={project.title} width={800} height={600} className='w-full px-8 pb-8'/>;

    const SLIDES = Array.from({ length: 4 }, () => img);

    return (
        <div className="mt-24 mx-auto px-4]">
            <Carousel infiniteLoop showStatus={false}>
                {SLIDES}
            </Carousel>
        </div>
    );
}
