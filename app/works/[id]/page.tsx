'use client'
import { projects } from '@/data/works';
import { redirect } from 'next/navigation';
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/Carousel/Carousel';
import Image from 'next/image';
interface Params {
    id: string;
}

interface PostPageProps {
    params: Params;
}

const OPTIONS: EmblaOptionsType = { loop: true }

export default function Work({ params }: PostPageProps) {
    const { id } = params;
    
    const project = projects.find((project) => project.id === id);
    
    if (!project) redirect('/works');
    
    const img = <Image src={project.image} alt={project.title} width={800} height={600} className='w-full'/>;

    const SLIDES = Array.from({ length: 4 }, () => img);

    return (
        <div className="mt-24 mx-auto px-4 md:max-w-[80%]">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}
