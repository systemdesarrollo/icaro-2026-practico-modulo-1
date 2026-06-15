import React from "react";
import { Col, Card } from "react-bootstrap";

export default function SistemasServiciosCard({ title, description, imagen }) {

  return (

    <Col md={3} sm={6} xs={12} className="mb-4 p-2">             
      <Card className="h-100 border border-3">  

        {(title || description) && (
          <Card.Body className="fs-6 fst-italic">
            {title && <Card.Title>{title}</Card.Title>}
            {description && <Card.Text>{description}</Card.Text>}
          </Card.Body>
        )}

        {imagen && <Card.Img variant="top" src={imagen} alt={title || "Servicios"} />}
                
      </Card>
    </Col>
   
  );
};



{/*

    *  sin control si extan vacios o llenos los comapos
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text> 
           
          <Card.Img variant="top" src={imagen} alt="Servicio"/>         
        </Card.Body>




  esto es lo mismo pero esta mezclado boostrap original con react-boostrap

    <Col md={3} className="text-center bg-body-secondary p-3 border border-4">
      <h5 className="h5_texto">{title}</h5>
      <p className="p_texto">{description}</p>
    </Col>
    */}
