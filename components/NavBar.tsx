'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { options } from '@/data/navOtions';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const shouldApplyScrolledStyle = scrolled || !isHome;

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                shouldApplyScrolledStyle ? 'bg-white shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <Link href={'/'} className="flex items-center">
                        <Image
                            src="/numisoft-logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="mr-2 w-12 h-12"
                        />
                        <h1
                            className={`text-xl font-semibold ${
                                shouldApplyScrolledStyle ? 'text-blue-800' : 'text-white'
                            }`}
                        >
                            Numisoft
                        </h1>
                    </Link>
                    <div className="items-center space-x-6 hidden md:flex">
                        {options.map((option) => (
                            <Link
                                href={option.url}
                                key={option.name}
                                className="hover:text-blue-800 transition-colors text-blue-500"
                            >
                                {option.name}
                            </Link>
                        ))}
                        <Link
                            href={'/contact'}
                            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Comenzar!
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="focus:outline-none text-blue-500"
                            onClick={toggleMenu}
                        >
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute w-full bg-white shadow-lg"
                    >
                        <div className="container mx-auto px-4 py-4">
                            {options.map((option) => (
                                <Link
                                    key={option.name}
                                    href={option.url}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-2 text-blue-500 hover:text-blue-800 transition-colors"
                                >
                                    {option.name}
                                </Link>
                            ))}
                            <Link
                                href={'/contact'}
                                onClick={() => setIsMenuOpen(false)}
                                className="block mt-4 px-4 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700 transition-colors"
                            >
                                Comenzar!
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
