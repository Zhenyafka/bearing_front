import * as React from 'react';
import {Header} from "./Header.tsx";
import {Catalogs} from "./Catalogs.tsx";
import {AboutUs} from "./AboutUs.tsx";
import {Basket} from "./Basket.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from "./Navbar.tsx";
import {Footer} from "./Footer.tsx";
import {TableBearing} from "./TableBearing2.tsx";

export function App () {
    return (
        <div>
        <div>
            <Header/>
        </div>
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/Catalogs' exact component={Catalogs}/>
                <Route path='/AboutUs' component={AboutUs}/>
                <Route path='/Basket' component={Basket}/>
            </Routes>
        </Router>
    </div>
    <div>
        <Footer/>
    </div>
</div>
    )
}
