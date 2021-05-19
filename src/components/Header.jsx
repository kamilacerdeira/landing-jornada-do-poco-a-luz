import '../styles/header.scss'

import Form from './Form'



// ASSETS
import logo from '../assets/logo.png'
import imgHeader from '../assets/Estátua.png'
import yellowWave from '../assets/yellow-wave.png'


const Header = props => {
    return (
        <div className="header">
            <div className="img-logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="header-section">
                <Form />
                {/* <div className="header-section-img"> */}
                    <img src={imgHeader} alt="Estátua" />
                {/* </div> */}
            </div>
            <img src={yellowWave} alt="" className="yellow-wave" />

        </div>
    )
}

export default Header