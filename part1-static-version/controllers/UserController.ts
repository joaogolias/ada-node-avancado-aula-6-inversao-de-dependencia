import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    public static async listUsers(req: Request, res: Response) {
        const users = await UserService.listUsers()
        res.json(users)
    }
}