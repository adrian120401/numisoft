import { services } from '@/data/services';

export default function Services() {
    return (
        <div className="mt-24">
            <h1 className="text-3xl font-bold text-center">Servicios</h1>
            <div className='flex flex-col items-center mt-4 px-4'>
                {services.map((service, index) => (
                    <div key={index} className="mb-8 max-w-6xl">
                        <h2 className="text-2xl font-bold">{service.title}</h2>
                        <p className="">{service.description}</p>
                        {service.content && <div className="mt-4">{service.content}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
