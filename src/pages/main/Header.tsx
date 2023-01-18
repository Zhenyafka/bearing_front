import logo from "../../images/logo.jpg";
import s from './Header.css'


export const Header = () =>{
    return (
       <div className={s.logo}>
           <div className="Header-Block">
            <img src={logo} alt="Logo"/>
        </div>

           <div className="Header-Block1">
                <h1>Contacts</h1>
                <p>+7 937-077-33-47</p>
                <p>+7 (846) 379-84-00</p>
                <p>379-84-01</p>
                <p>379-84-02</p>
        </div>
       </div>
    )
}