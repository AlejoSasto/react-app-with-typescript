import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { GetPost } from "./componentes/GetPost";
import post_almacen from "./componentes/CreatePost";
import getpost from "./componentes/GetPost";
import actualizar from "./componentes/UpdatePost";
import eliminar from "./componentes/DeletePost";
import getID from "./componentes/GetID";
import Table from "react-bootstrap/Table";

function imprimir_data() {
  getpost()
    .then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        const x = document.getElementsByClassName("data")[0];
        const y = document.createElement("tr");
        const z = document.createElement("td");
        const a = document.createElement("td");
        const m = document.createElement("td");
        const l = document.createElement("td");
        const b = document.createTextNode(response.data[i].id_marca);
        const c = document.createTextNode(response.data[i].nombre);
        const d = document.createTextNode(response.data[i].activo.toString());
        const e = document.createTextNode(
          response.data[i].item_ya_usado.toString()
        );

        z.appendChild(b);
        a.appendChild(c);

        m.appendChild(d);
        l.appendChild(e);

        y.appendChild(z);
        y.appendChild(a);

        y.appendChild(m);
        y.appendChild(l);

        x.appendChild(y);

        console.log(response.data[i].id_marca);
        console.log(response.data[i].nombre);
        console.log(response.data[i].activo);
        console.log(response.data[i].item_ya_usado);
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
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-8 col-xl-8">
          <center>
            <h1>Api consume servicios Web</h1>
          </center>
          <center>
            <h1>Lista </h1>
          </center>
          <button
            className="btn btn-success btn-block text-white"
            onClick={imprimir_data}
          >
            Listar
          </button>
          <div className="table-responsive py-2">
            <Table striped bordered hover className="data">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Activo</th>
                  <th>Item Ya Usado</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
          <hr />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <div className="card">
            <div className="card-body">
              <h1>Crear</h1>
              <div className="container_post">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Ingrese Nombre de la Marca"
                    name="nombre"
                    id="nombre"
                    className="form-control"
                  />
                  <input
                    className="btn btn-success btn-block text-white"
                    type="button"
                    value="Enviar"
                    onClick={obtener_data_form}
                  />
                </div>
              </div>
              <hr />
              <h1>Actualizar</h1>
              <div className="container_update">
                <div className="form-group">
                  <input
                    type="text"
                    name="id_marca"
                    id="id_marca"
                    placeholder="Ingrese Id de la Marca"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre_actualizar"
                    id="nombre_actualizar"
                    placeholder="Ingrese Nombre de la Marca"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                <input type="checkbox" name="estado" id="estado" />
                <label className="form-check-label">
                  Activo/Falso
                </label>
                </div>
                <input
                  className="btn btn-success btn-block text-white"
                  type="button"
                  value="Enviar"
                  onClick={obtener_data_form_update}
                />
              </div>
              <hr />
              <h1>Eliminar por id</h1>
              <div className="form-group">
              <input className="form-control" 
              type="text" 
              name="id_eliminar" 
              id="id_eliminar" 
              placeholder="Ingrese Id de la Marca" />
              
              <div className="form-group">
              </div>
              <button
                className="btn btn-success btn-block text-white"
                onClick={obtener_data_form_delete}>
                Eliminar
              </button>
              </div>
              {/* <input
            type="button"
            value="Eliminar"
            onClick={obtener_data_form_delete}
          /> */}
              <hr />
              <h1>Obtener por id</h1>
              <input type="text" name="id_get" id="id_get" />
              {/* <input type="button" value="Obtener" onClick={obtener_data_form_get_id} /> */}
              {/* <button variant="primary" onClick={obtener_data_form_get_id}>Obtener</button> */}
              <button
                className="btn btn-success btn-block text-white"
                onClick={obtener_data_form_get_id}
              >
                Obtener
              </button>
              <span id="resultado"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
