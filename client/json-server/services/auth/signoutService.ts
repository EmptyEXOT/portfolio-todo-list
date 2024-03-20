import {SignoutRequests} from "../../requests/SignoutRequest";
import {DatabaseSchema} from "../../models/DatabaseSchema";
import {UserSchema} from "../../models/UserSchema";
import * as fs from "fs";
import * as path from "path";
import * as express from 'express'
import {dbPath} from "../../variables/paths";

export const signoutService = (req: SignoutRequests, res: express.Response) => {
    const userInfo = req.body;
    const db: DatabaseSchema = JSON.parse(
        fs.readFileSync(dbPath, {encoding: "utf-8"}),
    );

    const users: UserSchema[] = db.users;
    const candidate = users.find(user => user.email === userInfo.email && user.token === userInfo.token)
    if (candidate) {
        return res.json(`User with email ${candidate.email} signout`)
    }

    res.status(404).json(`User with such email doesn't exist`);
}