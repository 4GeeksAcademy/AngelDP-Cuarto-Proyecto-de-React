import React from 'react';
import "./Tarea.css"

const Tarea = (props) => {
    return (
        <>
            <input 
                type="text" 
                placeholder='Escribe tu tarea aquí'
                value={props.valorTarea}
                onChange={props.capturarValor}
                onKeyDown={props.enviarTarea}
            />
        </>
    );
};
export default Tarea;