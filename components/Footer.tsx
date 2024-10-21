import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { options } from '@/data/navOtions';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-900 text-white pt-12 pb-6 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <Link href={'/'} className="flex items-center mb-4">
                        <Image
                            src="/numisoft-logo-white.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="mr-2 w-12 h-12"
                        />
                        <h1 className="text-2xl font-bold">Numisoft</h1>
                    </Link>
                    <p className="text-sm text-blue-200 text-center md:text-left mb-4">
                        Transformando ideas en soluciones digitales innovadoras.
                    </p>
                    <div className="flex space-x-4">
                        <Link href={'https://www.instagram.com/numisoft_'} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="lg" className="hover:text-blue-400 transition-colors" />
                        </Link>
                        <Link href={'https://www.facebook.com/numisoft/'} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="lg" className="hover:text-blue-400 transition-colors" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-semibold mb-4">Enlaces rápidos</h2>
                    {options.map((option) => (
                        <Link
                            href={option.url}
                            key={option.name}
                            className="mb-2 hover:text-blue-300 transition-colors"
                        >
                            {option.name}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-semibold mb-4">Contacto</h2>
                    <p className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        092833080
                    </p>
                    <p className="flex items-center mb-4">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        numisoft01@gmail.com
                    </p>
                    <Link
                        href={'/contact'}
                        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                        Comenzar!
                    </Link>
                </div>
            </div>
            <div className="container mx-auto mt-8 pt-6 text-center border-t border-blue-300">
                <p className="text-blue-300">&copy; {new Date().getFullYear()} numisoft. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;