import * as React from 'react';
import {Header} from "./Header.tsx";
import {Catalogs} from "./Catalogs.tsx";
import {Dealer} from "./Dealer.tsx";
import {Footer} from "./Footer.tsx";
import {TableBearing} from "./TableBearing.tsx";

export const App = () => {
    return (
        <div>
            <Header/>
            <Catalogs/>
            <TableBearing/>
            <Dealer/>
            <Footer/>
        </div>
    )
}
