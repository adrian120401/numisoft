import Image from 'next/image';
import Link from 'next/link';
const NavBar: React.FC = () => {
    const options = [
        {
            name: 'Servicios',
            url: '/services',
        },
        {
            name: 'Blog',
            url: '/blog',
        },
        {
            name: 'Trabajos',
            url: '/works',
        },
        {
            name: 'Sobre nosotros',
            url: '/about-us',
        },
        {
            name: 'Contacto',
            url: '/contact',
        },
    ];
    return (
        <nav className="flex items-center justify-between p-4 bg-stone-300 shadow-lg">
            <div className="flex items-center">
                <Image src="/NumiSoftLogo.png" alt="Logo" width={40} height={40} className="mr-2" />
                <h1 className="text-xl font-semibold">NumiSoft</h1>
            </div>
            <div className="flex items-center space-x-4">
                {options.map((option) => (
                    <Link href={option.url} key={option.name} className="hover:underline">
                        {option.name}
                    </Link>
                ))}
            </div>
            <div>
                <Link href={'/contract'} className="px-4 py-3 bg-slate-700 text-white rounded hover:bg-slate-800">
                    Comenzar!
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
