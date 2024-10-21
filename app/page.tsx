import About from '@/components/About';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Project from '@/components/Projects';
import Contact from '@/components/Contact';
import ParticlesBackground from '@/components/ParticlesBackground';
export default function Home() {
    return (
        <main className='overflow-x-hidden'>
            <div className="bg-light"></div>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <ParticlesBackground />
            </div>
            <Hero />
            <About />
            <Services />
            <Process />
            <Project />
            <Contact />
        </main>
    );
}
