import logo from "../../images/logo.jpg";
import s from './Components.css'


export const Header = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="Logo" className="headerBlock"/>
                
            <div className={s.headerBlock}></div>
        </div>
    )
}