import * as React from 'react';
import {Header} from "./Header.tsx";
import {Catalogs} from "./Catalogs.tsx";
import {Footer} from "./Footer.tsx";
import {TableBearing} from "./TableBearing.tsx";

export const App = () => {
    return (
        <div>
            <Header/>
            <Catalogs/>
            <TableBearing/>
            <Footer/>
        </div>
    )
}
