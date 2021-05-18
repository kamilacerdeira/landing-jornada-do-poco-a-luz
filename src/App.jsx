import './styles/global.scss'

import Header from './components/header'
import IconSection from './components/IconSection'
import About from './components/About'

export function App() {
    return (
    <>
        {/* <img src={yellowWave} alt="" /> */}
        <Header />
        <IconSection />
        <About />
    </>
    )
}