import '../styles/form.scss'
import swal from 'sweetalert'

const Form = props => {

    const sendEmail = () => {
        const form = document.getElementById('form')
        const emailValue = document.getElementById('email').value
        const emailValid = emailValue.includes('@') && emailValue.includes('.')

        if (emailValue && emailValid) {
            form.submit()
        } else if (!emailValue){
            swal("Campo vazio", "Por favor, insira um e-mail", "warning");
        } else {
            swal("E-mail inválido", "Por favor, insira um e-mail válido", "warning");

        }
    }

    return (
        <div className="form">
            <form method="POST" action="./activecampaign.php" id="form">
                <label>
                    <span>Se você acha que não tem nenhum defeito, pode fechar esta janela.</span> <br/>
                    <strong>Mas se você sabe que precisa melhorar, tenho um convite irrecusável.</strong>
                    <p> Nós estamos enfraquecidos pela sociedade moderna, que nos induz a viver como crianças 
                        mimadas - chegou o momento de sair do poço e amadurecer. <br/> <br/> Deixe o seu email abaixo e entre
                        para o grupo do whatsapp da jornada:
                    </p>
                </label>
                <input name="email" type="email" placeholder="Email:" id="email"/>
                <button type="button" onClick={() => sendEmail() }>Entrar no grupo da jornada</button>
            </form>
        </div >
    )
}

export default Form