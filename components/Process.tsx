import Image from "next/image";

const Process: React.FC = () => {
    const steps = [
        {
            icon: '/process/analysis.svg',
            name: 'Analisis',
            description: 'Analizamos tus necesidades y requerimientos para ofrecerte la mejor solución',
        },
        {
            icon: '/process/dev.svg',
            name: 'Desarrollo',
            description: 'Desarrollamos la solución a la medida de tus necesidades y requerimientos',
        },
        {
            icon: '/process/test.svg',
            name: 'Pruebas',
            description: 'Realizamos pruebas exhaustivas para garantizar el correcto funcionamiento de la solución',
        },
        {
            icon: '/process/finish.svg',
            name: 'Entrega y soporte',
            description: 'Entregamos la solución y brindamos soporte continuo para garantizar su correcto funcionamiento',
        },
    ];

    return (
        <div className="flex flex-col justify-center py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Nuesto proceso</h2>
            <div className="grid px-4 sm:grid-cols-4 gap-4 py-8 max-w-7xl">
                {steps.map((step, index) => (
                    <div key={index} className="text-center flex flex-col items-center">
                        <Image src={step.icon} width={50} height={50} alt="Icono del servicio" />
                        <div className="text-xl font-bold mt-3">{step.name}</div>
                        <div className="text-lg">{step.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;
