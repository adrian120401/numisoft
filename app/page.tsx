import About from '@/components/About';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
export default function Home() {
    return (
        <main>
            <div className="bg-light"></div>{' '}
            <Hero />
            <About />
            <Services />
            <Process />
        </main>
    );
}
