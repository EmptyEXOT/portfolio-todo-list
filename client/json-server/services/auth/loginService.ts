import {LoginRequests} from "../../requests/LoginRequests";
import {DatabaseSchema} from "../../models/DatabaseSchema";
import {UserSchema} from "../../models/UserSchema";
import * as path from "path";
import * as fs from "fs";
import * as express from 'express'
import {dbPath} from "../../variables/paths";

export const loginService = (req: LoginRequests, res: express.Response) => {
    try {
        const {email, password} = req.body;
        const db: DatabaseSchema = JSON.parse(
            fs.readFileSync(dbPath, {encoding: "utf-8"}),
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
}