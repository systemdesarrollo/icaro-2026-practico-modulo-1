import React from "react";
import {} from "react-dom"
import { Container, Row, Col } from "react-bootstrap";   // destructuro


export default function ContactoUbicacion() {

    return (
        
        <Container fluid>
            <Row className="p-3 border border-3">
                <Col className="col-12 col-md-12">
                 
                    <h5 className="p-4">Mapa Ubicacion Casa Central</h5>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10254.879223156491!2d-64.18955478679523!3d-31.435266351386243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2f2e7d183eb%3A0x78b8948cedfeb081!2sUniversidad%20Nacional%20de%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1773497713893!5m2!1ses-419!2sar"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa Ubicacion"
                    ></iframe>                                                                                                                                       
                
                </Col>
                <Col className="col-12 col-md-12">
                 
                    <h5 className="p-4">Mapa Ubicacion Sucursal</h5>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d18703.915884535898!2d-67.69639349566484!3d-53.78875532453765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stierra%20del%20fuego!5e0!3m2!1ses-419!2sar!4v1781493940787!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"                       
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa Ubicacion"
                    ></iframe>                                                                                                                                       
                
                </Col>


            </Row>
        </Container>
    )
}