'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import { motion, useInView } from 'framer-motion';

const PUBLIC_KEY: string = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
const SERVICE_ID: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;

interface ContactData {
    name: string;
    subject: string;
    email: string;
    method: string;
    phone: string;
    message: string;
}

interface ContactProps {
    useMotion?: boolean;
}

const Contact: React.FC<ContactProps> = ({ useMotion = true }) => {
    const [data, setData] = useState<ContactData>({
        name: '',
        subject: '',
        email: '',
        method: 'email',
        phone: '',
        message: '',
    });
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, []);

    const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, method: event.target.value });
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            await emailjs.send(SERVICE_ID, 'template_9v2mvhh', {
                name: data.name,
                method: data.method,
                contact: data.method === 'email' ? data.email : data.phone,
                message: data.message,
            });
            toast.success('Mensaje enviado correctamente', {});
            setData({
                name: '',
                email: '',
                subject: '',
                method: 'email',
                phone: '',
                message: '',
            });
        } catch (error) {
            toast.error(
                'Se ha producido un error, puedes mandar un email a: numisoft01@gmail.com',
                {
                    duration: 10000,
                }
            );
        }
    }

    const content = (
        <section
            ref={ref}
            className={`${useMotion ? '' : 'bg-gradient-to-b from-blue-50 to-white'} py-16`}
        >
            <div className="container mx-auto px-4">
                <Toaster position="top-right" />
                <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">Contáctanos</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    <div className="lg:w-1/2">
                        <Image
                            src="/about.jpg"
                            width={600}
                            height={400}
                            alt="Imagen de contacto"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="lg:w-1/2 bg-white rounded-lg shadow-xl p-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Nombre
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    required
                                    value={data.name}
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                    type="text"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="subject"
                                >
                                    Asunto
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="subject"
                                    required
                                    value={data.subject}
                                    onChange={(e) => setData({ ...data, subject: e.target.value })}
                                    type="text"
                                    placeholder="Asunto del mensaje"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Método de contacto
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-600"
                                            name="method"
                                            value="email"
                                            checked={data.method === 'email'}
                                            onChange={handleMethodChange}
                                        />
                                        <span className="ml-2">Email</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-600"
                                            name="method"
                                            value="phone"
                                            checked={data.method === 'phone'}
                                            onChange={handleMethodChange}
                                        />
                                        <span className="ml-2">Teléfono</span>
                                    </label>
                                </div>
                            </div>
                            {data.method === 'email' ? (
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        required={data.method === 'email'}
                                        value={data.email}
                                        onChange={(e) =>
                                            setData({ ...data, email: e.target.value })
                                        }
                                        type="email"
                                        placeholder="Tu email"
                                    />
                                </div>
                            ) : (
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="phone"
                                    >
                                        Teléfono
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="phone"
                                        required={data.method === 'phone'}
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData({ ...data, phone: e.target.value })
                                        }
                                        type="tel"
                                        placeholder="Tu número de teléfono"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="mt-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="message"
                            >
                                Mensaje
                            </label>
                            <textarea
                                className="shadow appearance-none resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                required
                                value={data.message}
                                onChange={(e) => setData({ ...data, message: e.target.value })}
                                placeholder="Tu mensaje"
                                rows={4}
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300"
                                type="submit"
                            >
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );

    return useMotion ? (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
        >
            {content}
        </motion.div>
    ) : (
        content
    );
};

export default Contact;
