import React from "react";
import HeaderGeneral from "./HeaderGeneral";
import FooterGeneral from "./FooterGeneral";
import SistemasServicios from "../pages/SistemasServicios";
import SistemasProductos from "../pages/SistemasProductos";
import SistemasDetalles from "../pages/SistemasDetalles";
import { Container, Row, Col } from "react-bootstrap";   // destructuro
import Layouts from "./Layouts";


export default function SystemBind() {

    return (
                 
            <Layouts>
                <SistemasServicios />                  
                <SistemasProductos /> 
                <SistemasDetalles />                         
            </Layouts>
      
    )
}