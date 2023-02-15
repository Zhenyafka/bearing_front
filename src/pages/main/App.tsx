import * as React from 'react';
import {Header} from "./Header.tsx";
import {Sidebar} from "./Sidebar.tsx";
import {Footer} from "./Footer.tsx";
import {TableBearing} from "./TableBearing2.tsx";

export const App = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <TableBearing/>
            <Footer/>
        </div>
    )
}
