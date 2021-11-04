import {connection} from "./connection";

connection.raw(`
    CREATE TABLE user_aula55 (
        id VARCHAR(64) PRIMARY KEY,
        email VARCHAR(64) UNIQUE,
        password VARCHAR(64) NOT NULL
    );
`)
.then(() => {
    console.log("Created table user_aula55!");
}).catch(error => {
    console.log(error.sqlMessage || error.message);
}).finally(() => {
    connection.destroy();
});