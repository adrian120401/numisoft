import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { options } from '@/data/navOtions';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white pt-4 px-4 mt-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="flex flex-col text-center sm:text-start">
                    <Link href={'/'} className="flex items-center">
                        <Image
                            src="/numisoft-logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="mr-2 w-12 h-12"
                        />
                        <h1 className="text-xl font-semibold">numisoft</h1>
                    </Link>
                    <div className="flex flex-col sm:flex-row mt-4">
                        {options.map((option) => (
                            <Link
                                href={option.url}
                                key={option.name}
                                className="sm:mr-4 hover:underline"
                            >
                                {option.name}
                            </Link>
                        ))}
                    </div>
                    <div className="my-8">
                        <Link
                            href={'/contract'}
                            className="px-4 py-3 bg-slate-600 text-white rounded hover:bg-slate-700"
                        >
                            Comenzar!
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center sm:items-start">
                        <p className="sm:mr-4 ">Teléfono: 092833080</p>
                        <p className="sm:mr-4">Email: numisoft@gmail.com</p>
                        <p className="sm:mt-2">Seguinos</p>
                        <div className="flex items-center mt-2">
                            <Link href={''}>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size="lg"
                                    className="mr-2 hover:scale-105"
                                />
                            </Link>
                            <Link href={''}>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    size="lg"
                                    className="hover:scale-105"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-2 py-2 text-center border-t-[1px] border-gray-600">
                <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;
