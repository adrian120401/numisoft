import About from '@/components/About';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Project from '@/components/Projects';
import Contact from '@/components/Contact';
export default function Home() {
    return (
        <main className='overflow-x-hidden'>
            <div className="bg-light"></div>
            <Hero />
            <About />
            <Services />
            <Process />
            <Project />
            <Contact />
        </main>
    );
}
