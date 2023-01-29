import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { GetPost } from "./componentes/GetPost";
import post_almacen from "./componentes/CreatePost";
import getpost from "./componentes/GetPost";
import actualizar from "./componentes/UpdatePost";
import eliminar from "./componentes/DeletePost";
import getID from "./componentes/GetID";

function imprimir_data() {
  getpost()
    .then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        const x = document.getElementsByClassName("data")[0];
        const y = document.createElement("tr");
        const z = document.createElement("td");
        const a = document.createElement("td");
        const b = document.createTextNode(response.data[i].id_marca);
        const c = document.createTextNode(response.data[i].nombre);
        z.appendChild(b);
        a.appendChild(c);
        y.appendChild(z);
        y.appendChild(a);
        x.appendChild(y);
        console.log(response.data[i].nombre);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
function obtener_data_form() {
  const nombre = document.getElementById("nombre") as HTMLInputElement;
  console.log(nombre.value);
  post_almacen(nombre.value)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function obtener_data_form_update() {
  const id = document.getElementById("id_marca") as HTMLInputElement;
  const nombre = document.getElementById(
    "nombre_actualizar"
  ) as HTMLInputElement;
  const estado = document.getElementById("estado") as HTMLInputElement;
  const bool_var = estado.checked;
  console.log(bool_var);
  actualizar(parseInt(id.value), nombre.value, bool_var)
    .then(function (response) {
      imprimir_data();
      alert("Se actualizo correctamente" + response.status);
    })
    .catch(function (error) {
      imprimir_data();
      alert("Error al actualizar: " + error);
    });
}
function obtener_data_form_delete() {
  const id = document.getElementById("id_eliminar") as HTMLInputElement;
  eliminar(parseInt(id.value))
    .then(function (response) {
      imprimir_data();
      alert("Se elimino correctamente" + response.status);
    })
    .catch(function (error) {
      imprimir_data();
      alert("Error al eliminar: " + error);
    });
}
function obtener_data_form_get_id() {
  const id = document.getElementById("id_get") as HTMLInputElement;
  const resultado = document.getElementById("resultado") as HTMLInputElement;
  getID(id.value)
    .then(function (response) {
      resultado.innerHTML = response.data.nombre + " " + response.data.activo;
      alert("Se obtuvo correctamente" + response.status);
    })
    .catch(function (error) {
      alert("Error al obtener: " + error);
    });
}

const App = () => {
  return (
    <div>
      <center>
        <h1>App</h1>
      </center>

      <h1>Lista</h1>
      <button onClick={imprimir_data}>Listar</button>
      <table className="data">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <hr />
      <h1>Crear</h1>
      <div className="container_post">
        <input type="text" name="nombre" id="nombre" />
        <input type="button" value="Enviar" onClick={obtener_data_form} />
      </div>
      <hr />
      <h1>Actualizar</h1>
      <div className="container_update">
        <input
          type="text"
          name="id_marca"
          id="id_marca"
          placeholder="Id de la marca"
        />
        <input
          type="text"
          name="nombre_actualizar"
          id="nombre_actualizar"
          placeholder="Nombre"
        />
        <input type="checkbox" name="estado" id="estado" />
        <input
          type="button"
          value="Enviar"
          onClick={obtener_data_form_update}
        />
      </div>
      <hr />
      <h1>Eliminar por id</h1>
      <input type="text" name="id_eliminar" id="id_eliminar" />
      <input
        type="button"
        value="Eliminar"
        onClick={obtener_data_form_delete}
      />
      <hr />
      <h1>Obtener por id</h1>
      <input type="text" name="id_get" id="id_get" />
      <input type="button" value="Obtener" onClick={obtener_data_form_get_id} />
      <span id="resultado"></span>
    </div>
  );
};
export default App;
