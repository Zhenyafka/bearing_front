import {useState} from "react";
import s from './Basket.css'

export const Basket= () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <div>
            <button className={'basketButton'} onClick={event => {setOpen(!isOpen)}}>
                Basket</button>
            {!isOpen ? null :
                <div>Your Basket!</div>
            }
            <div className={s.basketBlock}></div>
        </div>
    )
}