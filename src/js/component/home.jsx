import React, { useState } from "react";
import AgregarTareas from "./AgregarTareas";

//create your first component
const Home = () => {
  const [addTarea, setAddTarea] = useState([]);

  function listaTareas(e) {
    if (e.key === "Enter") {
      setAddTarea([...addTarea, e.target.value]);
      e.target.value = "";
    }
  }

  function eliminarTarea(i) {
    console.log(i);
    let newArray = addTarea.filter((element, indice) => indice !== i)
    setAddTarea(newArray);
  } 


  console.log(addTarea); //Revisar la tarea añadida

  return (
    <div className="contenedor-total">
      <h1 className="text-center mt-5">To Do List</h1>
      <div className="contenedor-tareas">
        <div className="input-group mb-3">
          <ul className="w-100">
            <input
              type="type"
              className="form-control ml-1"
              placeholder="Añadir Tarea"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onKeyDown={listaTareas}
            />
            <div className="nuevaTarea">
              {addTarea.map((element, i) => {
                return <AgregarTareas tipoTarea={element} borrarFuncion={eliminarTarea} key={i} indice={i}/>;
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
