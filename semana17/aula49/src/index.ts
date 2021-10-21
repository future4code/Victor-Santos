import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUsersByType } from "./endpoints/getUsersByType"
import { getUsersByName } from "./endpoints/getUsersByName"
import { getOrderUsers } from "./endpoints/getOrderUsers"
import { getUsersByPages } from "./endpoints/getUsersByPages"
import { getUsers } from "./endpoints/exercicio04_getUsers"

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/user", getAllUsers);

app.get("/users", getUsersByName);

app.get("/user/:type", getUsersByType);

app.get("/exercicio02/user", getOrderUsers);

app.get("/exercicio03/user", getUsersByPages);

app.get("/exercicio04/user", getUsers);

app.get("/exercicio04/user/:type", getUsers);

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});