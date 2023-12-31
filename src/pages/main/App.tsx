import * as React from 'react';
import {Header} from "./Header.tsx";
import {Catalogs} from "./Catalogs.tsx";
import {Searchbar} from "./Searchbar.tsx";
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
                <Catalogs/>
            </div>
            <div>
                <Searchbar placeholder="Enter a bearing number" data={TableBearing}/>
            </div>
            <div>
                <AboutUs/>
            </div>
            <div>
                <Basket/>
            </div>
    {/*<div>*/}
    {/*    /!*<Router>*!/*/}
    {/*        <Navbar/>*/}
    {/*    /!*    <Routes>*!/*/}
    {/*    /!*        <Route path='/Catalogs' Component={Catalogs}/>*!/*/}
    {/*    /!*        <Route path='/AboutUs' Component={AboutUs}/>*!/*/}
    {/*    /!*        <Route path='/Basket' Component={Basket}/>*!/*/}
    {/*    /!*    </Routes>*!/*/}
    {/*    /!*</Router>*!/*/}
    {/*</div>*/}
            {/*<div>*/}
            {/*    <TableBearing/>*/}
            {/*</div>*/}
    <div>
        <Footer/>
    </div>
</div>
    )
}
