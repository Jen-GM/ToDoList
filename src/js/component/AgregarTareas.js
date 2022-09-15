import React from "react";
import "../stylesheet/AgregarTareas.css"

function AgregarTareas({ tipoTarea, borrarFuncion, indice }) {

  return (
    <div className="contenedor-tarea d-flex justify-content-between pb-3">
      <li className="tareaIndividual">{tipoTarea}</li>
      <button
        type="button"
        className="btn btn-outline-primary"
        aria-label="Close"
        onClick={() => {borrarFuncion(indice)}}
      >X</button>
    </div>
  );
}

export default AgregarTareas;
