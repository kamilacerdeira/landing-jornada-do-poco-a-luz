import './styles/global.scss'
import AOS from 'aos';
import './styles/aos.css';

import Header from './components/Header'
import IconSection from './components/IconSection'
import About from './components/About'

export function App() {

    AOS.init({
        startEvent: 'load',
    });

    return (
    <>
        {/* <img src={yellowWave} alt="" /> */}
        <Header />
        <IconSection />
        <About />
    </>
    )
}