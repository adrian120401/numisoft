import Image from 'next/image';
import Link from 'next/link';

interface CardProjectProps {
    id: string;
    title: string;
    description: string;
    image: string;
}

const CardProject: React.FC<CardProjectProps> = ({ id, title, description, image }) => {
    return (
        <div className='bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105'>
            <div className='relative h-64'>
                <Image className="object-cover" src={image} alt={title} layout="fill" />
            </div>
            <div className="p-6">
                <h3 className="font-bold text-2xl mb-2 text-blue-700">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <Link href={`/works/${id}`} className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                    Ver detalles
                </Link>
            </div>
        </div>
    );
};

export default CardProject;