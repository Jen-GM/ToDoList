import React, { useState } from "react";
import "../stylesheet/AgregarTareas.css"

function AgregarTareas({ tipoTarea, borrarFuncion, indice }) {
  return (
    <div className="contenedor-tarea d-flex justify-content-between pb-1">
      <span className="tareaIndividual">{tipoTarea}</span>
      <button
        type="button"
        className="btn-close btn-close-dark"
        aria-label="Close"
        onClick={() => {borrarFuncion(indice)}}
      ></button>
    </div>
  );
}

export default AgregarTareas;
