import {useState} from "react";
import s from './Components.css'

export const Basket= () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <div>
            <button className={'button'} onClick={event => {setOpen(!isOpen)}}>
                Basket</button>
            {!isOpen ? null :
                <div>Your Basket!</div>
            }
            <div className={s.button}></div>
        </div>
    )
}