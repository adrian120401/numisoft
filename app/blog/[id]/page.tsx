'use client'
import { articles } from '@/data/articles';
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
    
    const article = articles.find((article) => article.id === id);
    
    if (!article) redirect('/works');

    return (
        <div className="mt-24 mx-auto md:max-w-[80%] md:px-4 pb-4">
            <h1 className="text-center text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-center text-lg mb-4">{article.description}</p>
            {article.content && article.content}
        </div>
    );
}
