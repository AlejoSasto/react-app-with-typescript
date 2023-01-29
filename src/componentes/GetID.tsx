import axios from "axios";

export default async function getID(id: string) {
  const url =
    "https://backend-bia-beta-production.up.railway.app/api/almacen/marcas/get-by-id/" +
    id +
    "/";
  console.log(url);
  return await axios.get(url);
}
