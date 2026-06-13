import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function MainSecond () {

     useEffect(() => {
              
        const parrafo = document.querySelectorAll('.parrafo');
   
        parrafo.forEach(parrafo => {

            // paso mouse por encima
            parrafo.addEventListener('mouseover',(e) => {
                if (parrafo.tagName === 'P') {
                    parrafo.style.fontSize = '20px'; 
                    parrafo.style.background = '#cbcecd'; 
                     //console.log(parrafo.tagName)        
                }  
            });            

           // saco el mouse de encima
            parrafo.addEventListener('mouseout',(e) => {
                if (parrafo.tagName === 'P') {
                    parrafo.style.fontSize = '16px';  
                    parrafo.style.background = 'white';
                     //console.log(parrafo.tagName)        
                }  
            }); 
        })
       },[]);

    return (

        <Container fluid>
            <Row>
                <Col className="border border-3 p-4">                
                    <div> 
                      <p className="parrafo">Emití tus facturas electrónicas ante ARCA, múltiples CUITs, control de stock, listas de precios, reportes automáticos y en tu email, centros de costos, vinculá tu contabilidad y sincronizá tus ventas de tus tiendas favoritas</p>               
                      <p className="parrafo">Nuestro objetivo es ayudarte a encontrar el equipo ideal mediante un asesoramiento personalizado. El mundo de la tecnología puede parecer confuso con tantas especificaciones técnicas complejas, pero nuestro trabajo es traducir esos datos en beneficios reales para tu día a día. Asegurandote que lo que lleves resuelva exactamente lo que necesitas, ya sea para estudiar, trabajar, diseñar o disfrutar de tus videojuegos favoritos.</p>                                     
                      <p className="parrafo">Contamos con un equipo de soporte para dar solución a los clientes más exigentes; si sus necesidades lo requieren, nos movemos hasta su empresa para darle la solución. Contamos, a su vez, con soporte básico, empresas y premium</p>
                    </div>                                                    
                </Col>
            </Row>      
        </Container>

    )
}