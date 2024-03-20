import {AddTodoRequest} from "../../requests/TodoRequests";
import {DatabaseSchema} from "../../models/DatabaseSchema";
import {TodoSchema} from "../../models/TodoSchema";
import * as fs from "fs";
import * as path from "path";
import * as express from 'express'
import {dbPath} from "../../variables/paths";
import {UserSchema} from "../../models/UserSchema";

export const addTodoService = (req: AddTodoRequest, res: express.Response) => {
    try {
        const {todo, author} = req.body
        const db: DatabaseSchema = JSON.parse(
            fs.readFileSync(dbPath, {encoding: "utf-8"}),
        );

        const todoIds = db.todos.map(todo => todo.id)

        const users: UserSchema[] = db.users;
        const candidate = users.find(user => user.email === author.email);

        let newTodoId = 0;
        if (todoIds.length) {
            newTodoId = Math.max(...todoIds) + 1;
        }

        if (candidate && candidate.token === author.token) {
            const newTodo: TodoSchema = {
                id: newTodoId,
                title: todo.title,
                description: todo.description,
                author: author.email,
            }

            db.todos.push(newTodo)

            fs.writeFileSync(dbPath, JSON.stringify(db, undefined, 2))
            return res.json(todo);
        }

        else return res.status(404).json('Bad Request')
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: e.message})
    }
}