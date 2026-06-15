import React,{ useState, useEffect } from "react";
import { Container, Row, Col, FormControl, Form, FormGroup, Button, FormCheck, FormLabel } from "react-bootstrap";   // destructuro
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Calendar } from "primereact/calendar"

import RadioOption from "../pages/RadioOption";
import FechPrime from "../pages/FechPrime";

// puedo usar useForm de react-hook-form con yup
// o puedo usar formik con yup


const activities = ['Comercio', 'Empresa', 'Personal','Estudiante'];

// aca afuera de la funcion defino los campos y validaciones
const schema = yup.object({

    usernames: yup.string().required('Requerido Nombre'),
    userlastname: yup.string().required('Requerido Apellido'),
//    useranionacimiento: yup.number().typeError('Debe ser Numerico').positive().integer().min(1950,'El Año debe ser Valido').max(3000,'No puede se mayor a 4 cifras').required('Requerido Año Nacimiento'),
    useremail: yup.string().email('Debe Ingresar Mail Valido').required('Requerido Mail'),
    userdate: yup.date().typeError('Debe Ingresar Fecha Valida').required('Requiere Fecha'),   // Captura formatos rotos o vacíos
    userradiocheck: yup.string().required('Requerido Opcion'),   
    usertextarea: yup.string().required('Requerido Detalle')
                                   .max(100, "El detalle no puede superar los 200 caracteres") 

    //userType: yup.string().oneOf(activities, 'Debe seleccionar una opción').required('La opción es requerida')

}).required();



export default function ContactoFormulario() {

    // se definen todas las funciones de verificadion o control
    const {register, handleSubmit, formState : {errors} } = useForm({resolver: yupResolver(schema)});
    const [activitiesList,setActivitiesList] = useState(activities);
    //const {register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        
        <Container fluid>
            <Row className=" p-2 border border-3">
                <Col className="col-12 col-md-6 text-center bg-body-secondary align-content-center">
                   <Form action="" onSubmit={handleSubmit(onSubmit)}>
                                                                                                  
                        <Form.Group className="mb-3">
                            <Form.Label className="p-2">Nombre</Form.Label>  
                                <Form.Control 
                                    {...register('usernames')}
                                    type="text"
                                    placeholder="Nombre"
                                    id="usernames"
                                    />
                                    {errors?.usernames?.message || ''}                                
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="p-2">Apellido</Form.Label>  
                                <Form.Control 
                                    {...register('userlastname')}
                                    type="text"
                                    placeholder="Apellido"
                                    id="userlastname"
                                    />
                                    {errors?.userlastname?.message || ''}                                
                        </Form.Group>

                        <Form.Group className="mb-3">
                                                        
                            <FechPrime>
                                                                         
                            </FechPrime>
                                                                                                           
                         </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label className="p-2">Mail</Form.Label>  
                                <Form.Control 
                                    {...register('useremail')}
                                    type="text"
                                    placeholder="Mail"
                                    id="useremail"
                                    />
                                    {errors?.useremail?.message || ''}                                
                        </Form.Group>

                        <Form.Group className="mb-3">                                                                                        
                            {activitiesList.map((a, index) => (
                            <RadioOption
                                key={index}
                                value={a}
                                register={register}
                                error={errors?.userradiocheck}
                                index={index}
                            />
                            ))}                                                                                          
                         </Form.Group>         
                                                              
                   </Form>                                
                </Col>

                <Col className="col-12 col-md-6 text-center bg-body-secondary align-content-center">
                   <Form action="" onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-5">
                            <Form.Label className="p-2">Detalle</Form.Label>      
                           
                            <Form.Control  
                                {...register('usertextarea')}
                                as="textarea"
                                rows={18}
                                placeholder="Detalle"
                                id="usertextarea"
                            />
                            {errors?.usertextarea?.message || ''}                                
                        </Form.Group>

                        <button type="submit" className='btn btn-primary'>Continuar</button>

                   </Form>                                
                </Col>               
            
            </Row>
        </Container>
    )
}