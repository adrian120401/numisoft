'use client';
import Image from 'next/image';
import { useState } from 'react';

const Contact: React.FC  = () => {
    const [method, setMethod] = useState('email');

    const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMethod(event.target.value);
    };

    return (
        <section className="flex flex-col items-center justify-center py-8 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Contacto</h2>
            <div className="flex flex-col md:flex-row relative">
                <Image
                    src="/about.jpg"
                    width={600}
                    height={400}
                    alt="Imagen de contacto"
                    className="rounded-ee-3xl"
                />
                <form className="my-2 md:relative md:ml-[-100px] md:bg-gray-100 rounded-ss-3xl p-4 grid md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Nombre
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="subject"
                        >
                            Asunto
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="Asunto"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="method"
                        >
                            Método de contacto
                        </label>
                        <div className="flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="radio"
                                name="method"
                                value="email"
                                defaultChecked
                                onChange={handleMethodChange}
                            />
                            <span className="text-sm">Email</span>
                        </div>
                        <div className="flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="radio"
                                name="method"
                                value="phone"
                                onChange={handleMethodChange}
                            />
                            <span className="text-sm">Teléfono</span>
                        </div>
                    </div>
                    {method === 'email' ? (
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    ) : (
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="phone"
                            >
                                Teléfono
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                type="text"
                                placeholder="Teléfono"
                            />
                        </div>
                    )}
                    <div className="mb-4 md:col-span-2">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="message"
                        >
                            Mensaje
                        </label>
                        <textarea
                            className="shadow appearance-none resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Mensaje"
                            rows={4}
                        />
                    </div>
                    <div className="md:col-start-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
