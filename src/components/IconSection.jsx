import '../styles/iconSection.scss'

import iconBear from '../assets/iconBear.png'
import iconBox from '../assets/iconBox.png'
import iconHeart from '../assets/iconHeart.png'
import yellowWave from '../assets/yellow-wave.png'



const IconSection = props => {

    return (
        <>
            <img src={yellowWave} alt="" className="yellow-wave" />

            <div className="icon-section">
                <div className="icons" data-aos="fade" data-aos-once="true" data-aos-duration="1500" data-aos-delay="200">
                    <img src={iconBear} alt="icon" />
                    <p> Entenda por que você não consegue ser a pessoa que <span>deseja</span>.</p>
                </div>
                <div className="icons" data-aos="fade" data-aos-once="true" data-aos-duration="1500" data-aos-delay="400">
                    <img src={iconBox} alt="icon" />
                    <p>Conheça e <span>combata</span> os principais defeitos da sua personalidade.</p>
                </div>
                <div className="icons" data-aos="fade" data-aos-once="true" data-aos-duration="1500" data-aos-delay="600">
                    <img src={iconHeart} alt="icon" />
                    <p><span>Os perigos</span> do amor desordenado por si mesmo.</p>
                </div>
            </div>
        </>
    )
}

export default IconSection