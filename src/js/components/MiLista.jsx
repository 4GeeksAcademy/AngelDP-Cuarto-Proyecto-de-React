import React, { useState } from 'react';
import Tarea from "./Tarea/Tarea.jsx"
import TareaPendiente from './TareaPendiente/TareaPendiente.jsx';

const MiLista = (props) => {

    const [tareas, setTareas] = useState([]);
    const [imputValue, setImputValue] = useState("");

    const handleChange = (e) => {
        setImputValue(e.target.value);
    };

    const pressKey = (e) => {
        if (e.key === "Enter") {
            setTareas([...tareas, imputValue]);
            setImputValue("")
        }
    }

    const eliminarTareas = (index) => {
        const newTask = [...tareas];
        newTask.splice(index, 1);
        setTareas(newTask);
    }

    return (
        <>
            <Tarea
                capturarValor={handleChange}
                valorTarea={imputValue}
                enviarTarea={pressKey}
            />

            <TareaPendiente
                listaDeTareas={tareas}
                eliminarTarea={eliminarTareas}
            />
        </>
    );
};
export default MiLista;