import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from "react-bootstrap";   // destructuro
import  SistemasServiciosCard from "./SistemasServiciosCard";


// array de objetos
const servicios = [
    {
        title: "Factura electronica",
        description: "Automatice el proceso de factura electrónica en su negocio con nuestra plataforma y olvidese de sesiones caidas en Arca, ya sea para mercado interno, facturas de exportación, facturas para hoteles y turismo o bien facturas de crédito electrónica (FCE) a grandes contribuyentes. Consulte por nuestra API de factura electrónica para integraciones",
    },
    {
        title: "Ingresos y Egresos",
        description: "Realice sus ventas, segmentando por productos clasificados con varios niveles y controlando sotck en cada paso. Registre sus compras y gastos, segmentando por productos clasificados con varios niveles, lleve el control de los vencimientos y analice sus compras y gastos para poder determinar con simplicidad donde está yendo su dinero",                
    },
    {
        title: "Ingresos y Egresos",
        description: "Lleve un control sobre todos sus procesos de cobro de clientes y pago a proveedores, conozca sus estados de cuenta en cada momento, adminsitre sus medios do cobro y pago como efectivo, bancos, cheques y cuentas de retenciones apicadas y recibidas, genere reportes de éstas últimas",                        
    },
    {
        title: "Informes",
        description: "Obtenga el máximo beneficio de nuestros reportes de ventas, compras, cobranzas, pago a proveedores, fabricación, reporte de iva compra/venta, regimen de información de compras y ventas, informe de resultados y mas",
                       
    }
];


export default function SistemasServicios() {

    return (
       <Container fluid>
                <Row className="justify-content-center bg-body-secondary">                                          
                    {servicios.map((s, index) => (
                       < SistemasServiciosCard
                         key={index}     
                         title={s.title}
                         description={s.description}                         
                         />
                    ))}
                    
                </Row>  
        </Container>
    )
}

