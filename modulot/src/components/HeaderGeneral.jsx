import React from "react";
import { Navbar, Nav, Dropdown, Container, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom"


export default function HeaderGeneral() {

            {/*            
            <Navbar>                    Barra de navegación 
            <Navbar.Brand>              Logo 
            <Navbar.Toggle>             Botón hamburguesa 
            <Navbar.Collapse>           Contenedor del menú 
            <Nav>                       Contenedor de items 
            <Nav.Link>                  Links del menú 
            <Dropdown>                  Menú desplegable 
            <Dropdown.Toggle>           Botón que abre 
            <Dropdown.Menu>             Menú desplegable 
            <Dropdown.Item>             Items del dropdown 
            <Dropdown.Header>           Encabezado 
            <Dropdown.Divider>          Separador                    
            */}

    return (
        
     
            //menu principal
            <header>
                <Navbar expand="lg" className='bg-warning'> 
                    <Container>
                        <Navbar.Brand as={Link} to="/" >SystemDesarrollo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/sistemasbind">Sistemas</Nav.Link>                           
                            {/*
                            <Nav.Link href="#">Ventas</Nav.Link>                    
                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Soporte de Sistemas</NavDropdown.Item>                    
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Soporte de Equipos</NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link as={Link} to="/contactobind">Contacto</Nav.Link> 
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>            
            </header>   
      

    )   
}