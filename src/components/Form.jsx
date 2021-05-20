import '../styles/form.scss'

const Form = props => {

    const sendEmail = () => {
        const form = document.getElementById('form')
        const emailValue = document.getElementById('email').value
        const emailValid = emailValue.includes('@') && emailValue.includes('.')

        if (emailValue && emailValid) {
            form.submit()
        } else if (!emailValue){
            alert('Por favor insira um e-mail!')
        } else {
            alert('Por favor insira um e-mail válido')
        }
    }

    return (
        <div className="form">
            <form method="POST" action="./activecampaign.php" id="form">
                <label>
                    Deixe o seu email e entre para o <br/> grupo de <span>WhatsApp</span> da jornada.
                </label>
                <input name="email" type="email" placeholder="Email:" id="email"/>
                <button type="button" onClick={() => sendEmail() }>Call to action</button>
            </form>
        </div >
    )
}

export default Form