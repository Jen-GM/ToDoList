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

  console.log(addTarea);  //Revisar la tarea añadida

  return (
    <div className="contenedor">
      <h1 className="text-center mt-5">Todos</h1>
      <div className="contenedor-tareas">
        <div className="input-group mb-3">
          <ul>
            <input
              type="type"
              className="form-control"
              placeholder="Añadir Tarea"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onKeyDown={listaTareas}
            />
            <div className="nuevaTarea">
				<AgregarTareas 
				tipoTarea = {addTarea} />
			</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
