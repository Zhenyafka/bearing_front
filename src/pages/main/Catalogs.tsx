import {useState} from "react";

export interface MenuElement {
    name: string,
    elements: Array<string>
}

const ballBearings: MenuElement = {
    name: "ballBearings",
    elements: ['Double row bearings', 'Single row bearings']
}

const bearingUnits: MenuElement = {
    name: "bearingUnits",
    elements: ['Type S (UCP)', 'Type F (UCF)', 'Type G (UCFC)']
}

const categories = [ballBearings, bearingUnits]

export const Catalogs = () => {
    const [elements, setElements] = useState<Array<string>>(ballBearings.elements)

    const handleMouseEnter = (menuElement: MenuElement) => {
        setElements(menuElement.elements)
        console.log("enter = " + JSON.stringify(menuElement))
    }

    return <div>
        <h2>CATALOG</h2>
        <div className="menu">
            {categories.map(value =>
                <div onMouseEnter={event => handleMouseEnter(value)}>
                    <h2>{value.name}</h2>
                </div>
            )}
        </div>

        <div className="elements">
            {elements.map(value =>
                <h1>{value}</h1>
            )}
        </div>
    </div>
}