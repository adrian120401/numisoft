import About from '@/components/About';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
export default function Home() {
    return (
        <main>
            <div className="bg-light"></div>{' '}
            <Hero />
            <Services />
            <About />
        </main>
    );
}
