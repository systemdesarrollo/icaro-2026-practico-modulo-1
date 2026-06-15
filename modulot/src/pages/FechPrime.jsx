import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Container } from 'react-bootstrap';


//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function FechPrime() {
    const [date, setDate] = useState(null);

    return (
    
            <div className="flex-auto">              
                <label htmlFor="buttondisplay" className="font-bold block mb-2 p-2">
                    Fecha Nacimiento
                </label>
                <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" showIcon />
            </div>
        
           
    )
 }