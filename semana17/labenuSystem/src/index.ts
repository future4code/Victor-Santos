import express from "express";
import cors from "cors";
import {AddressInfo} from "net";
import { getAllStudents } from "./endpoints/getAll";
import { createStudent } from "./endpoints/createStudant";
import { createTeacher } from "./endpoints/createTeacher";
import { createCohort } from "./endpoints/createCohort";
import { addStudentCohort } from "./endpoints/addStudentCohort";
import { addTeacherCohort } from "./endpoints/addTeacherCohort";
import { getStudantAge } from "./endpoints/getStudantAge";


const app = express();

app.use(express.json());
app.use(cors())

app.get("/student", getAllStudents);

app.put("/cohort/create", createCohort);

app.put("/student/create", createStudent);

app.put("/teacher/create", createTeacher);

app.post("/student/update/:id", addStudentCohort);

app.post("/teacher/update/:id", addTeacherCohort);

app.get("/studant/age/:id", getStudantAge);

//Declarando um server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:3003/${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
})




