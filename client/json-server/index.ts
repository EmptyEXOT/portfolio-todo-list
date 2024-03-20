import jsonServer = require('json-server');
import path = require('path');
import express = require('express');
import {loginService} from "./services/auth/loginService";
import {validateService} from "./services/auth/validateService";
import {signoutService} from "./services/auth/signoutService";
import {getAllTodosService} from "./services/todos/getAllTodosService";
import {addTodoService} from "./services/todos/addTodoService";
import {deleteTodoByIdService} from "./services/todos/deleteTodoByIdService";
import {editTodoByIdService} from "./services/todos/editTodoByIdService";
import {getTodosService} from "./services/todos/getTodosService";

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

server.post('/login', loginService);
server.post('/validate', validateService)

//eslint-disable-next-line
server.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.headers.authorization.split('Bearer ')[1] === 'null') {
        return res.status(403).json({message: 'AUTH ERROR'});
    }
    next();
});

server.post('/signout', signoutService)

server.get('/todos/:userEmail', getTodosService)
server.get('/todos/all', getAllTodosService)
server.post('/todos', addTodoService)
server.delete('/todos/:id', deleteTodoByIdService)
server.put('/todos/:id', editTodoByIdService)

server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
