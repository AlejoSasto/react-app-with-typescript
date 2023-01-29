import axios from "axios";

export default async function eliminar(id: number) {
  const url =
    "https://backend-bia-beta-production.up.railway.app/api/almacen/marcas/delete/" +
    id +
    "/";
  return await axios.delete(url);
}
