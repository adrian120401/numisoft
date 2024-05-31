import { services } from '@/data/services';
import CardService from '@/components/CardService';

export default function Services() {
    return (
        <div className="mt-24">
            <h1 className="text-3xl font-bold text-center">Servicios</h1>
            <div className='flex flex-col items-center mt-4'>
                {services.map((service, index) => (
                    <div key={index} className="mb-4">
                        <CardService
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
