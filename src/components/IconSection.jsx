import '../styles/iconSection.scss'

import yellowWave from '../assets/yellow-wave.png'
import iconBear from '../assets/iconBear.png'
import iconBox from '../assets/iconBox.png'
import iconHeart from '../assets/iconHeart.png'


const IconSection = props => {

    return (
        <>
            <img src={yellowWave} alt="" className="yellow-wave" />
            <div className="icon-section">
                <div className="icons">
                    <img src={iconBear} alt="icon" />
                    <p> Todos somos "brinquedos" quebrados e precisamos de <span>conserto.</span></p>
                </div>
                <div className="icons">
                    <img src={iconBox} alt="icon" />
                    <p><span>Combata</span> os elementos enfraquecedores da sua personalidade.</p>
                </div>
                <div className="icons">
                    <img src={iconHeart} alt="icon" />
                    <p><span>Os perigos</span> do amor desordenado por si mesmo.</p>
                </div>
            </div>
        </>
    )
}

export default IconSection