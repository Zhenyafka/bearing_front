import {useState} from "react";
import s from './Components.css'

export interface MenuElement {
    name: string,
    elements: Array<string>
}

const ballBearings: MenuElement = {
    name: "ballBearings",
    elements: ['Double row bearings', 'Single row bearings', 'Bearings for agricultural machinery']
}

const bearingUnits: MenuElement = {
    name: "bearingUnits",
    elements: ['Type S (UCP)', 'Type F (UCF)', 'Type G (UCFC)', 'Type N (UCFL)', 'Type T (UCT)', 'Type V (UCPA)', 'Other']
}

const bearingHousings: MenuElement = {
    name: "bearingHousings",
    elements: []
}

const hubsAP: MenuElement = {
    name: "habsAP",
    elements: []
}

const bySizes: MenuElement = {
    name: "bySizes",
    elements: []
}

const categories = [ballBearings, bearingUnits, bearingHousings, hubsAP, bySizes]

export const Catalogs = () => {
    const [elements, setElements] = useState<Array<string>>(ballBearings.elements)
    const [isOpen, setOpen] = useState<boolean>(false)

    const handleMouseEnter = (menuElement: MenuElement) => {
        setElements(menuElement.elements)
        console.log("enter = " + JSON.stringify(menuElement))
    }

    return <div>
        <button className={'button'} onClick={event => {setOpen(!isOpen)}}>
            Catalog
        </button>
        {!isOpen ? null :
            <div className="catalogBlock">
                <div className="catalogBlock1">
                    <div className="menu">
                        {categories.map(value =>
                            <div onMouseEnter={event => handleMouseEnter(value)}>
                                <h2>{value.name}</h2>
                            </div>
                        )}
                    </div>
                </div>

                <div className="catalogBlock2">
                    <div className="elements">
                        {elements.map(value =>
                            <h1>{value}</h1>
                        )}
                    </div>
                    <div className={s.catalogBlock1}></div>
                </div>
            </div>
        }
    </div>
}