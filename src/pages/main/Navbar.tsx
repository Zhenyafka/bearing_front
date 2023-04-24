import {Catalogs} from "./Catalogs.tsx";
import {AboutUs} from "./AboutUs.tsx";
import {Basket} from "./Basket.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import s from './Components.css'


export const Navbar = () => {
    return (
        <div>
        <div>
            <li>
                <a href="/Catalogs" className="button">Catalogs</a>
            </li>
            <li>
                <a href="/AboutUs" className="button">AboutUs</a>
            </li>
            <li>
                <a href="/Basket" className="button">Basket</a>
            </li>

        </div>
            <div className={s.headerBlock}></div>
        </div>
    );
};
