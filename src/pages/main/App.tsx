import * as React from 'react';
import {Header} from "./Header.tsx";
import {Navbar} from "./Navbar.tsx";
import {Footer} from "./Footer.tsx";
import {TableBearing} from "./TableBearing2.tsx";

export const App = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <TableBearing/>
            <Footer/>
        </div>
    )
}
