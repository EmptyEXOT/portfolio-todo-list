import {GetTodoRequest} from "../../requests/TodoRequests";
import {DatabaseSchema} from "../../models/DatabaseSchema";
import {UserSchema} from "../../models/UserSchema";
import * as fs from "fs";
import * as path from "path";
import * as express from 'express'
import {dbPath} from "../../variables/paths";

export const getAllTodosService = (req: GetTodoRequest, res: express.Response) => {
    try {
        const db: DatabaseSchema = JSON.parse(
            fs.readFileSync(dbPath, {encoding: "utf-8"}),
        );

        const todos = db.todos;
        return res.json(todos);
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: e.message});
    }
}