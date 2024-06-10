'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

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
const Contact: React.FC = () => {
    const [data, setData] = useState<ContactData>({
        name: '',
        subject: '',
        email: '',
        method: 'email',
        phone: '',
        message: '',
    });

    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, []);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.08,
    });

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
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-8 px-4"
        >
            <Toaster position="top-right" />
            <h2 className="text-2xl font-bold mb-4 text-center">Contacto</h2>
            <div className="flex flex-col md:flex-row relative">
                <Image
                    src="/about.jpg"
                    width={600}
                    height={400}
                    alt="Imagen de contacto"
                    className="rounded-ee-3xl"
                />
                <form
                    onSubmit={handleSubmit}
                    className="my-2 md:relative md:ml-[-100px] md:bg-gray-100 rounded-ss-3xl p-4 grid md:grid-cols-2 gap-4"
                >
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
                            required
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
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
                            required
                            value={data.subject}
                            onChange={(e) => setData({ ...data, subject: e.target.value })}
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
                    {data.method === 'email' ? (
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
                                required={data.method === 'email'}
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
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
                                required={data.method === 'phone'}
                                value={data.phone}
                                onChange={(e) => setData({ ...data, phone: e.target.value })}
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
                            required
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}
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
        </motion.section>
    );
};

export default Contact;
