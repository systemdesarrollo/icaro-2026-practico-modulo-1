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
                      <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi libero id explicabo, blanditiis eaque. Ex at quaerat optio numquam velit cupiditate officia consectetur voluptatem fugit soluta, sit vitae reiciendis!</p>               
                      <p className="parrafo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto culpa qui placeat modi incidunt eveniet, commodi dolorem rem! Tenetur cum eum eius quibusdam sit eaque magnam blanditiis eveniet doloremque iusto?</p>
                    </div>                                                    
                </Col>
            </Row>      
        </Container>

    )
}