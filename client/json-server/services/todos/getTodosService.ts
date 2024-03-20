import {GetTodoRequest} from "../../requests/TodoRequests";
import {DatabaseSchema} from "../../models/DatabaseSchema";
import {UserSchema} from "../../models/UserSchema";
import * as fs from "fs";
import * as express from 'express'
import {dbPath} from "../../variables/paths";

export const getTodosService = (req: GetTodoRequest, res: express.Response) => {
    try {
        const db: DatabaseSchema = JSON.parse(
            fs.readFileSync(dbPath, {encoding: "utf-8"}),
        );
        const {userEmail} = req.params
        const users: UserSchema[] = db.users;
        const candidate = users.find(user => user.email === userEmail)

        if (!candidate) {
            return res.status(403).json('Bad request');
        }

        const allTodos = db.todos;
        const candidateTodos = allTodos.filter(todo => todo.author === candidate.email)

        return res.json(candidateTodos);
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: e.message});
    }
}