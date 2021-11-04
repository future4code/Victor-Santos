import { BaseDatabase } from "./BaseDatabase";
import { User } from "../classes/User";

export class UserDatabase extends BaseDatabase {
    async createUser(user: User) {
        await BaseDatabase.connection("users")
        .insert(user);
    };

    async getAll() {
        return await BaseDatabase.connection("users");
    };

    async delete(id: string) {
        await BaseDatabase.connection("users")
        .where({id})
    };
}