import AOS from 'aos';
import '../styles/aos.css';


import Header from './Header'
import IconSection from './IconSection'
import About from './About'

export function Home() {

    AOS.init({
        startEvent: 'load',
    });

    return (
    <>
        <Header />
        <IconSection />
        <About />
    </>
    )
}