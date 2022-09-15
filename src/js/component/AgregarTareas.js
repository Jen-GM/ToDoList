import React from "react";

function AgregarTareas({ tipoTarea }) {
  return (
    <>
      <li className="tareaIndividual">{tipoTarea}</li>
      <button
        type="button"
        className="btn-close btn-close-white"
        aria-label="Close"
      ></button>
    </>
  );
}

export default AgregarTareas;
