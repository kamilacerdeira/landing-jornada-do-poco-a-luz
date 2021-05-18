import '../styles/form.scss'



const Form = props => {
    return (
        <div className="form">
            <form>
                <label>
                    Deixe o seu email e entre para o <br/> grupo de <span>WhatsApp</span> da jornada.
                </label>
                <input type="email" placeholder="Email:" />
                <button>Call to action</button>
            </form>
        </div >
    )
}

export default Form