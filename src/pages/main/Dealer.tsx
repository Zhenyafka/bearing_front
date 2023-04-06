import certificate from "../../images/certificate.png";
import certificate2 from "../../images/certificate2.jpg";
import s from './Dealer.css'
export const Dealer = () =>{
    return <div className='dealerBlock'>
        <div className='dealerBlock1'>
            <h1>Dealer information</h1>
            <p>Text</p>
        </div>
        <div className='dealerBlock1'>
            <img src={certificate} alt="certificate"/>
        </div>
        <div className='dealerBlock1'>
            <img src={certificate2} alt="certificate2"/>
        </div>
        <div className={s.dealerBlock}></div>
    </div>
}