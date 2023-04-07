import {Catalogs} from "./Catalogs.tsx";
import {AboutUs} from "./AboutUs.tsx";
import {Basket} from "./Basket.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";


// export const Navbar = () => {
//     const [isOpen, setIsOpen] = useState<boolean>()
//
//
//     return (
//         <div>
//             <Catalogs/>
//             <AboutUs/>
//             <Basket/>
//         </div>
//     )
// }

const Navbar = () => {
    return (
        <div>
            <li>
                <Link to="/Catalogs">Catalogs</Link>
            </li>
            <li>
                <Link to="/AboutUs">AboutUs</Link>
            </li>
            <li>
                <Link to="/Basket">Basket</Link>
            </li>

        </div>
    );
};

export default Navbar;