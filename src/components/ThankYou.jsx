import '../styles/thankYou.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/logo2.png'
import Footer from './Footer'



const ThankYou = props => {

    return (
        <>
        <div className="thank-you">
            <div className="img-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="thank-you-content">
                <h2>PARABÉNS!</h2>
                <span>AGORA FALTA UM ÚNICO PASSO PARA <br/> VOCÊ CONFIRMAR A SUA INSCRIÇÃO.</span>
                <br/>
                <p>VAI LEVAR MENOS DE 1 MINUTO, BELEZA?</p>
                <p id="thank-you-p"> Entre para o grupo oficial no <span>WhatsApp</span> ou no <span style={{'color':'#4ea4f6'}} >Telegram</span> comigo e minha equipe!
                    <br/> <br/> Assim conseguiremos te avisar de todas as novidades, com vídeos e áudios 
                    sobre a Jornada.<br/> <br/> Assim, você não perde nada.
                </p>
            </div>
            <div className="thank-you-buttons">
                <button id="wpp-button">
                    <div className="wpp-icon">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <span>Entrar para o grupo</span> 
                </button>
                <button id="telegram-button">
                    <div className="telegram-icon">
                        <FontAwesomeIcon icon={faTelegramPlane} />
                    </div>
                    <span>Entrar para o grupo</span>
                </button>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ThankYou