
import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from "react-bootstrap";   // destructuro
import  SistemasServiciosCard from "./SistemasServiciosCard";

import pagosImg from "../assets/i_pagos.png";
import ctacteImg from "../assets/i_ctacte.png";
import comprasImg from "../assets/i_compras.png";


// array de objetos
const servicios = [
    {
        title: "Pantalla de Pagos", 
        description: "",
        imagen: pagosImg, 
    },
    {
        title: "Pantalla de Cta.Cte.", 
        description: "",
        imagen: ctacteImg,    },
    {
        title: "Pantalla de Compras", 
        description: "",
        imagen: comprasImg, 
    },    
];


export default function SistemasProductos() {

    return (
       <Container fluid>
                <Row className="justify-content-center bg-body-secondary">                                          
                    {servicios.map((s, index) => (
                       < SistemasServiciosCard
                         key={index}   
                         title={s.title}
                         description={s.description}                             
                         imagen={s.imagen}                        
                         />
                    ))}
                    
                </Row>  
        </Container>
    )
}

