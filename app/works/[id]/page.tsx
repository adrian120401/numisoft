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
    
    const SLIDES = project.images.map((image, index) => (
        <div key={index} className="relative w-full h-[200px] md:h-[480px]">
            <Image 
                src={image} 
                alt={project.title} 
                layout="fill" 
                className="object-contain"
            />
        </div>
    ));



    return (
        <div className="bg-gradient-to-b from-blue-50 to-white py-16 mt-12">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold text-center text-blue-800 mb-6">{project.title}</h1>
                <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">{project.description}</p>
                <div className="mb-8">
                    <Carousel 
                        infiniteLoop 
                        showStatus={false} 
                        showThumbs={false} 
                        className="rounded-lg overflow-hidden"
                    >
                        {SLIDES}
                    </Carousel>
                </div>
                {project.content && (
                    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                        {project.content}
                    </div>
                )}
            </div>
        </div>
    );
}