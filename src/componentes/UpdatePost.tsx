import axios from "axios";

export default async function actualizar(
  id: number,
  nombres: string,
  estado: boolean
) {
  const url =
    "https://backend-bia-beta-production.up.railway.app/api/almacen/marcas/update/" +
    id +
    "/";
  console.log(id, nombres, estado);
  return await axios.put(
    url,
    {
      nombre: nombres,
      activo: estado,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
