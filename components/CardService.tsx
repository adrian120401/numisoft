import Image from 'next/image';

interface CardServiceProps {
    icon: string;
    title: string;
    description: string;
}

const CardService: React.FC<CardServiceProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white border border-cyan-700 rounded-lg shadow-md max-h-full p-4 w-80 sm:w-[40rem]">
            <div className="flex items-center justify-center w-16 h-16 p-2 border border-cyan-700 rounded-full">
                <Image src={icon} width={50} height={50} alt="Icono del servicio" />
            </div>
            <h3 className="text-xl font-semibold mt-4">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );
};

export default CardService;
