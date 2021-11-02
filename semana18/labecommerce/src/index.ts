import{app} from "./app";
import { createProduct } from "./endpoints/createProduct";
import createUser from "./endpoints/createUser";
import { getAllProducts } from "./endpoints/getAllProduct";
import { getAllUsers } from "./endpoints/getAllUsers";

app.get("/user", getAllUsers);

app.post("/user", createUser);

app.post("/product", createProduct);

app.get("/product", getAllProducts);