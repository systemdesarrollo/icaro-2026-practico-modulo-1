import React from "react";
import { Container, Row, Col } from "react-bootstrap";   // destructuro
 

export default function FooterGeneral() {
        
    return (

        // footer
        <footer>                
            <Container fluid>
                <Row>                                          

                    <Col className="col-md-6 text-center bg-secondary p-3 align-content-center">
                        <h4>Nuestras Redes - Seguinos</h4> 

                        <div>                         
                            <a href='http://whatsapp.com'
                                target="_blank"
                                rel="noopener noreferre">                                                                                             
                                
                                <svg aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#449c52"
                                    strokeWidth="1.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    >
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                                </svg>
                            </a>
                            <a href='http://facebooks.com'
                                target="_blank"
                                rel="noopener noreferre">                                                                                             
                                
                                <svg aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    >
                                    <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
                                    </svg>
                            </a>  
                            <a href='http://instagram.com'
                                target="_blank"
                                rel="noopener noreferre">                                                                                             
                                
                                <svg aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff2d55"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                >
                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M16.5 7.5l0 .01" />
                                </svg>
                            </a>  
                            <a href='http://linkedin.com'
                                target="_blank"
                                rel="noopener noreferre">                                                                                             

                                <svg aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#007aff"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                >
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M8 11l0 5" />
                                <path d="M8 8l0 .01" />
                                <path d="M12 16l0 -5" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>                                                                
                            </a>  


                        </div>          
                    </Col>  

                    <Col md={6} className="col-md-6 text-center bg-secondary p-3 align-content-center">
                           <h3>Telefonos</h3>
                           <p>2302-666555-666556</p>
                    </Col>                    
                    <Col className="col-12 text-center bg-secondary">  {/*  col-12   xs={12}   */}
                          <p><span className="fw-bold">System Desarrollo</span> - Software para crecer 2026 - Todos los derechos reservados</p>
                    </Col>
                                       
                </Row>  
            </Container>
        
        </footer>

    )    
}