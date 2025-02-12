import React from 'react';
import "./TareaPendiente.css"

const TareaPendiente = (props) => {

    
    return (
        <>
            <ul>
                {props.listaDeTareas.map((tarea, index) =>(
                    <li key={index}>
                        {tarea}
                        <button style={{float: 'right'}}  className="btn btn-danger" onClick={() => props.eliminarTarea(index)}> X </button> 
                    </li>
                ))}
            </ul>
        </>
    );
};
export default TareaPendiente;