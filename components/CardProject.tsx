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
        <div className='flex flex-col md:flex-row rounded overflow-hidden shadow-lg card-project'>
            <Image className="w-full" src={image} alt="Project" width={400} height={400} />
            <div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="px-6 py-4">
                    <Link href={`/works/${id}`} className="text-blue-500 font-bold hover:underline">
                        Mostrar más ...
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardProject;
