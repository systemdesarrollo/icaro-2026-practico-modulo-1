import React from "react";
import HeaderGeneral from "../components/HeaderGeneral";
import FooterGeneral from "../components/FooterGeneral";
import System from "../pages/System";
import SystemFirst from "../pages/SystemFirst";
import SystemSecond from "../pages/SystemSecond";
import Systemthird from "../pages/Systemthird"
import { Container, Row, Col } from "react-bootstrap";   // destructuro
import Layouts from "./Layouts";


export default function SystemBind() {

    return (
       
        <div>
    
            <Layouts>
                <System />                  
                <SystemFirst/> 
                <SystemSecond/>               
                <Systemthird />
            </Layouts>

        </div>

    )
}