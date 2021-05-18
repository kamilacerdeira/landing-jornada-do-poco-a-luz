import '../styles/header.scss'
import Form from './Form'



// ASSETS
import logo from '../assets/logo.png'
import imgHeader from '../assets/Estátua.png'

const Header = props => {
    return (
        <div className="header">
            <div className="img-logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="header-section">
                <Form />
                <img src={imgHeader} alt="Estátua" />
            </div>
        </div>
    )
}

export default Header