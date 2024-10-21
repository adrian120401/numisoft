import { services } from '@/data/services';
import Image from 'next/image';

export default function Services() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white py-16 mt-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
                    Nuestros Servicios
                </h1>
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/3 p-6 flex flex-col justify-center items-center">
                                    <div className="mb-4">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                    <h2 className="text-2xl font-bold text-blue-600 mb-3 text-center">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 text-center">
                                        {service.description}
                                    </p>
                                </div>
                                {service.content && (
                                    <div className="lg:w-2/3 bg-blue-50 p-6">{service.content}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
