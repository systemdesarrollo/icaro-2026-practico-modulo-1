//import { Children } from "react";
// importacion desusturada de routers 
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderGeneral from "./HeaderGeneral";
import FooterGeneral from "./FooterGeneral";


export default function Layouts( { children })  {

    return (

        <div>
            <HeaderGeneral />
                {children}
            <FooterGeneral />
       </div>

    )
}

