import React from 'react';
import './listaDeTareas.css';

function listaDeTareas(){
    return (
        <ul id="lista-tareas">
            <Tarea titulo="Pasear al Toby" prioridad="prioridad-alta"/>
            <Tarea titulo="Aprender React" prioridad="prioridad-media"/>
            <Tarea titulo="Dormir" prioridad="prioridad-baja"/>
        </ul>
    );
}

function Tarea(props){
    return <li className={props.prioridad}>{props.titulo}</li>
}

export default listaDeTareas;
