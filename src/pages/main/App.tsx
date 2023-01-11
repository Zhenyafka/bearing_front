import * as React from 'react';
import {Header} from "./Header.tsx";
import {Catalog} from "./Catalog.tsx";
import {Footer} from "./Footer.tsx";
import {TableBearing} from "./TableBearing.tsx";

export const App = () => {
    return (
        <div>
            <Header/>
            <Catalog/>
            <TableBearing/>
            <Footer/>
        </div>
    )
}
