import logo from "../../images/logo.jpg";
import s from './Header.css'


export const Header = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="Logo" className="headerBlock"/>
                <h1 className="top-right">+7 937-077-33-47 +7 (846) 379-84-00</h1>
            </div>
            {/*<div className="header">+7 937-077-33-47 +7 (846) 379-84-00</div>*/}
            <div className={s.headerBlock}></div>
        </div>
    )
}