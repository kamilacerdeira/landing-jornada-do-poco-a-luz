import '../styles/form.scss'
import axios from 'axios'

const Form = props => {

    const sendEmail = () => {
        const emailValue = document.getElementById('email').value
        const emailValid = emailValue.includes('@') && emailValue.includes('.')

        if (emailValue && emailValid) {
            window.location.href='/thankYou'
        } else if (!emailValue){
            alert('Por favor insira um e-mail!')
        } else {
            alert('Por favor insira um e-mail válido')
        }
    }

    return (
        <div className="form">
            <form>
                <label>
                    Deixe o seu email e entre para o <br/> grupo de <span>WhatsApp</span> da jornada.
                </label>
                <input type="email" placeholder="Email:" id="email"/>
                <button type="button" onClick={() => sendEmail() }>Call to action</button>
            </form>
        </div >
    )
}

export default Form