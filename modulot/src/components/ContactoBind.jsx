import React from "react";
import { Container, Row, Col } from "react-bootstrap";   // destructuro
import Layouts from "./Layouts";
import ContactoUbicacion from "../pages/ContactoUbicacion";
import ContactoFormulario from "../pages/ContactoFormulario";


export default function ContactoBind() {

    return (
        
        <Layouts>

             <Container fluid>
                <Row>
                    <Col className="col-12 col-md-6 text-center bg-body-secondary p-5 align-content-center">
                        <ContactoUbicacion/>                                      
                   </Col>
                   <Col className="col-12 col-md-6 text-center bg-body-secondary p-5 align-content-center">
                         <ContactoFormulario/>  
                   </Col>                                     
               </Row>               
            </Container>
                 
        </Layouts>
    )
}