'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { options } from '@/data/navOtions';

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 w-full z-10 bg-gray-100 flex items-center justify-between p-4 shadow-lg">
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
            <div className="items-center space-x-4 hidden md:flex">
                {options.map((option) => (
                    <Link href={option.url} key={option.name} className="hover:underline">
                        {option.name}
                    </Link>
                ))}
            </div>
            <div className="hidden md:flex">
                <Link
                    href={'/contract'}
                    className="px-4 py-3 bg-slate-700 text-white rounded hover:bg-slate-800"
                >
                    Comenzar!
                </Link>
            </div>
            <div className="flex md:hidden">
                <button
                    type="button"
                    className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                    onClick={toggleMenu}
                >
                    <FontAwesomeIcon icon={faBars} size="lg" color="gray" />
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col absolute w-screen h-screen top-0 left-0 bg-white text-center">
                    <button
                        type="button"
                        className="text-gray-400 hover:text-white focus:outline-none focus:text-white text-end mr-4 mt-7"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faXmark} size="lg" color="gray" />
                    </button>
                    <div className="px-2 pt-2 pb-3 mt-4 space-y-2 sm:px-3 flex flex-col">
                        {options.map((option) => (
                            <Link key={option.name} href={option.url} className="text-blue-ford">
                                {option.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Link
                            href={'/contract'}
                            className="px-4 py-3 bg-slate-700 text-white rounded hover:bg-slate-800"
                        >
                            Comenzar!
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
