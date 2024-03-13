import fs = require('fs');
import jsonServer = require('json-server');
import path = require('path');
import express = require('express');
import {DatabaseSchema} from "./models/DatabaseSchema";
import {LoginRequests} from "./requests/LoginRequests";
import {AddTodoRequest, DeleteTodoRequest, GetTodoRequest, UpdateTodoRequest} from "./requests/TodoRequests";
import {TodoSchema} from "./models/TodoSchema";
import {UserSchema} from "./models/UserSchema";
import {ValidateUserRequest} from "./requests/ValidateUserRequest";

//TODO fix ts error for .create()
//@ts-ignore
const server = jsonServer.create();

//TODO fix ts error for .router
//@ts-ignore
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

//TODO fix ts error for .defaults()
//@ts-ignore
server.use(jsonServer.defaults({}));

//TODO fix ts error for .bodyParser
//@ts-ignore
server.use(jsonServer.bodyParser);

server.use(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    await new Promise((res) => {
        setTimeout(res, 10);
    });
    next();
});

server.post('/login', (req: LoginRequests, res: express.Response) => {
    try {
        const {email, password} = req.body;
        const db: DatabaseSchema = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), {encoding: "utf-8"}),
        );
        const {users = []} = db;

        const userFromBd: UserSchema = users.find(
            (user) => user.email === email && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd)
        }

        return res.status(403).json({message: 'User not found'});
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: e.message});
    }
});

server.post('/validate', (req: ValidateUserRequest, res: express.Response) => {
    const {email, token} = req.body

    const db: DatabaseSchema = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, 'db.json'), {encoding: "utf-8"}),
    );

    const users: UserSchema[] = db.users;
    const candidate = users.find(user => user.email === email && String(user.id) === token);
    if (candidate) {
        return res.json(true)
    }
    res.json(false)
})

//eslint-disable-next-line
server.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.headers.authorization.split('Bearer ')[1] === 'null') {
        return res.status(403).json({message: 'AUTH ERROR'});
    }

    next();
});

server.get('/todos', (req: GetTodoRequest, res: express.Response) => {
    try {
        const db: DatabaseSchema = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), {encoding: "utf-8"}),
        );

        const todos = db.todos;
        return res.json(todos);
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: e.message});
    }
})

server.post('/todos', (req: AddTodoRequest, res: express.Response) => {
    try {
        const todo = req.body
        const db: DatabaseSchema = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), {encoding: "utf-8"}),
        );

        const todoIds = db.todos.map(todo => todo.id)

        let newTodoId = 0;
        if (todoIds.length) {
            newTodoId = Math.max(...todoIds) + 1;
        }

        const newTodo: TodoSchema = {
            id: newTodoId,
            title: todo.title,
            description: todo.description,
            author: "alim"
        }

        db.todos.push(newTodo)

        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, undefined, 2))
        return res.json(todo);
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: e.message})
    }
})

server.delete('/todos/:id', (req: DeleteTodoRequest, res: express.Response) => {
    const candidateId = Number(req.params['id']);
    const db: DatabaseSchema = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, 'db.json'), {encoding: "utf-8"}),
    );

    const todos = db.todos;
    const todoToBeDeleted = todos.filter(todo => todo.id === candidateId)
    if (!todoToBeDeleted) {
        res.status(404).send()
    }
    db.todos = todos.filter(todo => todo.id !== candidateId);
    fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, undefined, 2))
    res.json(todoToBeDeleted);
})

server.put('/todos/:id', (req: UpdateTodoRequest, res: express.Response) => {
    const candidateId = Number(req.params['id']);

    const db: DatabaseSchema = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, 'db.json'), {encoding: "utf-8"}),
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

    fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, undefined, 2))

    res.json(candidate);
})

server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
