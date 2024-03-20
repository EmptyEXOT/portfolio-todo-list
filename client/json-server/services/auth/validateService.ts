import {ValidateUserRequest} from "../../requests/ValidateUserRequest";
import {DatabaseSchema} from "../../models/DatabaseSchema";
import {UserSchema} from "../../models/UserSchema";
import * as fs from "fs";
import * as express from 'express'
import {dbPath} from "../../variables/paths";

export const validateService = (req: ValidateUserRequest, res: express.Response) => {
    const {email, token} = req.body

    const db: DatabaseSchema = JSON.parse(
        fs.readFileSync(dbPath, {encoding: "utf-8"}),
    );

    const users: UserSchema[] = db.users;
    const candidate = users.find(user => user.email === email && user.token === token);
    if (candidate) {
        return res.json(true)
    }
    res.json(false)
}