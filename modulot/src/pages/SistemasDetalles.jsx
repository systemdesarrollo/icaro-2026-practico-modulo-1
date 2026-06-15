import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";   // destructuro

import  SistemasServiciosCard from "./SistemasServiciosCard";

// array de objetos

const servicios = [
    {
        title: "",
        description: {
            description_opciona: "Crear facturas electrónicas y comprobantes de venta",
            description_opcionb: "Facturar remitos o presupuestos de manera automática",
            description_opcionc: "Ventas con comisiones automáticas por vendedor y cliente",
            description_opciond: "Reservar stock de productos de venta al facturar y descontarlos al crear una remisión de productos al momento del despacho",
            description_opcione: "Aumenta tu stock al ingresar tus órdenes de compra y descontalo al momento de la venta o despacho",
            description_opcionf: "Creá abonos o suscripciones vinculando clientes con productos, facturandolos automáticamente el día y con la frecuencia que necesites y enviándolos automáticos por email",   
    },
    imagen: "",
    },
    {
        title: "", 
        description: {
            description_opciona: "Actualizá el costo de cada producto ante la compra y promediando los valores presentes con los nuevos ingresados",
            description_opcionb: "Crea etiquetas personalizadas para poder filtrar la información en los presupuestos, facturas de venta y compra",
            description_opcionc: "Crear clientes y proveedores tomando la información de éstos desde el padrón de Arca de manera automatizada, simplificando la tarea de creación",
            description_opciond: "Maneja múltiples cuentas de cobro y pago en la tesorería",
            description_opcione: "Vincula tus clientes, proveedores, productos, cuentas de efectivo, bancos, retenciones, cheques propios y de terceros con la contabilidad para generar todos los asientos contables de manera automática",
            description_opcionf: "Crea masivamente facturas de venta a través de un archivo Excel",
        },
        imagen: "",    },
    {
        title: "", 
        description: {
            description_opciona: "Si sos agente de retención/percepción , vas a poder aplicar dichos conceptos de manera automática en tus ventas",
            description_opcionb: "Administrá la tesorería y todas las cuentas necesarias para trabajar: efectivo, bancos, tarjetas de crédito, cuentas de retenciones y obtené un detalle de movimientos de cada una por el período que necesites",
            description_opciond: "Llevá un control de cuentas corrientes tanto de tus clientes como de tus proveedores, y los saldos de todos ellos con una fecha de corte determinada",
            description_opciond: "Obtené un reporte de montos de compras vs ventas y monto total de iva final a presentar cada período",
            description_opcione: "Liquidá sueldos, creando novedades, vinculando conceptos y empleados en una liquidación de sueldo y obtené un reporte de costos",
            description_opcionf: "Configurá reportes de ventas para obtenerlos automatizados en tu correo electrónico",
        },
        imagen: "", 
    },    
];


export default function SistemasDetalles() {


    return (
       <Container fluid>
                <Row>                                          

                    <Col className="col-md-12 text-center bg-body-secondary p-5 align-content-center">                                          

                        <Card className="col-12 bg-body-secondary p-2">
                                    <h1>Mas detalles de lo que puede hacer System Desarrollo</h1>
                                    <h3>(Y si no lo tenemos, lo desarrollamos)</h3>       
                        </Card>

                        <Container fluid>
                            <Row className="justify-content-center bg-body-secondary">                                          
                                {servicios.map((s, index) => (
                                < SistemasServiciosCard
                                    key={index}   
                                    title={s.title}
                                    description={ 
                                        <>
                                        {'# '+s.description.description_opciona+'.'}
                                       <br />
                                       {'# '+s.description.description_opcionb+'.'}                                                                  
                                       <br />
                                       {'# '+s.description.description_opcionc+'.'} 
                                       <br />
                                       {'# '+s.description.description_opciond+'.'} 
                                       <br />
                                       {'# '+s.description.description_opcione+'.'} 
                                       <br />
                                       {'# '+s.description.description_opcionf+'.'} 
                                       </>}                                                    
                                    />
                                ))}
                                
                            </Row>  
                        </Container>
                     
                    </Col>
                                       
                </Row>  
        </Container>
    )
}
