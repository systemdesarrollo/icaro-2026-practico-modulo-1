import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";   // destructuro

import styles from "../styles/Maincarousel.module.css";

export default function MainFirst () {
  
    return (
 
        <Container fluid>
           <Row>
            <Col className="text-center bg-body-secondary p-5 align-content-center">
            <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="src/assets/sistemas.jpg?text=Second slide&bg=eee"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5 className={styles.carouseltextcelest}>Sistemas Informaticos</h5>
                <p className={styles.carouseltextcelest}>Soluciones tecnológicas de última generación para tu negocio.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="src/assets/ventas.jpg?text=Second slide&bg=eee"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5 className={styles.carouseltextred}>Ventas</h5>
                <p className={styles.carouseltextred}>Ventas de equipos a medida de tus necesidades.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="src/assets/reparaciones.jpg?text=Third slide&bg=e5e5e5"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5 className={styles.carouseltextgreen}>Reparacion de Equipos</h5>
                <p className={styles.carouseltextgreen}>Servicio técnico especializado para todos tus dispositivos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </Col>
            </Row> 
           </Container> 
  );
}
