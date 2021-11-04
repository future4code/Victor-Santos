import {app} from "./app";
import { createUser } from "./endpoints/createUser";
import { getUser } from "./endpoints/getUser";
import { login } from "./endpoints/login";

app.post("/user/create", createUser);

app.post("/user/login", login);

app.get("/user", getUser);