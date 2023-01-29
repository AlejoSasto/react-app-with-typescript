import axios from "axios";

export default async function getpost() {
  return await axios.get(
    "https://backend-bia-beta-production.up.railway.app/api/almacen/marcas/get-list/"
  );
}
