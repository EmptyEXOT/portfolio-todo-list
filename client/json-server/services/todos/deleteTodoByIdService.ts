import {DeleteTodoRequest} from "../../requests/TodoRequests";
import {DatabaseSchema} from "../../models/DatabaseSchema";
import * as fs from "fs";
import * as path from "path";
import * as express from 'express'
import {dbPath} from "../../variables/paths";


export const deleteTodoByIdService = (req: DeleteTodoRequest, res: express.Response) => {
    const candidateId = Number(req.params['id']);
    const db: DatabaseSchema = JSON.parse(
        fs.readFileSync(dbPath, {encoding: "utf-8"}),
    );

    const todos = db.todos;
    const todoToBeDeleted = todos.filter(todo => todo.id === candidateId)
    if (!todoToBeDeleted) {
        res.status(404).send()
    }
    db.todos = todos.filter(todo => todo.id !== candidateId);
    fs.writeFileSync(dbPath, JSON.stringify(db, undefined, 2))
    res.json(todoToBeDeleted);
}