import {useState} from "react";
import s from './Components.css';
import certificate from "../../images/certificate.png";
import certificate2 from "../../images/certificate2.jpg";


export const AboutUs= () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <div>
        <button className={'button'} onClick={event => {setOpen(!isOpen)}}>
            AboutUs</button>
            {!isOpen ? null :
                <div className='dealerBlock'>
                    <div className='dealerBlock'>
                        <h1>About Us information</h1>
                        <p>Text</p>
                    </div>
                    <div>
                        <img src={certificate} alt="certificate" className='dealerBlock1'/>
                    </div>
                    <div>
                        <img src={certificate2} alt="certificate2" className='dealerBlock1'/>
                    </div>
                    <div className={s.dealerBlock}></div>
                </div>
        }
        <div className={s.Button}></div>
        </div>
    )
}