import logo from "../../images/logo.jpg";
import s from './Header.css'


export const Header = () =>{
    return (
       <div  className="headerBlock">
           <div className="headerBlock1">
            <img src={logo} alt="Logo"/>
        </div>

           <div className="headerBlock2">
                <h1>Contacts</h1>
                <p>+7 937-077-33-47</p>
                <p>+7 (846) 379-84-00</p>
                <p>379-84-01</p>
                <p>379-84-02</p>
        </div>
           <div className={s.logo}></div>
       </div>
    )
}