import {UpdateTodoRequest} from "../../requests/TodoRequests";
import {DatabaseSchema} from "../../models/DatabaseSchema";
import {TodoSchema} from "../../models/TodoSchema";
import * as fs from "fs";
import * as path from "path";
import * as express from 'express'
import {dbPath} from "../../variables/paths";

export const editTodoByIdService = (req: UpdateTodoRequest, res: express.Response) => {
    const candidateId = Number(req.params['id']);

    const db: DatabaseSchema = JSON.parse(
        fs.readFileSync(dbPath, {encoding: "utf-8"}),
    );

    let candidate: TodoSchema;

    db.todos = db.todos.map((todo) => {
        if (todo.id === candidateId) {
            candidate = {
                id: todo.id,
                title: req.body.title,
                description: req.body.description,
                author: todo.author,
            };
            return candidate
        }
        return todo
    });

    fs.writeFileSync(dbPath, JSON.stringify(db, undefined, 2))

    res.json(candidate);
}