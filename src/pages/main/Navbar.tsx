import {Catalogs} from "./Catalogs.tsx";
import {AboutUs} from "./AboutUs.tsx";
import {Basket} from "./Basket.tsx";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>()


    return (
        <div>
            <Catalogs/>
            <AboutUs/>
            <Basket/>
        </div>
    )
}