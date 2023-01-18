import {useState} from "react";
import s from './AboutUs.css'

export const AboutUs= () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <div>
        <button className={'aboutUsButton'} onClick={event => {setOpen(!isOpen)}}>
            AboutUs</button>
            {!isOpen ? null :
            <div>Text</div>
        }
        <div className={s.aboutUsBlock}></div>
        </div>
    )
}