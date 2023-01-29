import axios from "axios";

export default async function post_almacen(name: String) {
  return await axios.post(
    "https://backend-bia-beta-production.up.railway.app/api/almacen/marcas/create/",
    {
      nombre: name,
    }
  );
}
// post_almacen().then(function (response) {
//     console.log(response)
// }).catch(function (error) {
//     console.log(error)
// })
