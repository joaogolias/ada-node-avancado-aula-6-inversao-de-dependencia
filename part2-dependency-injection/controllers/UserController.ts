import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    private userService: UserService

    constructor(userService: UserService) {
        this.userService = userService
    }

    public listUsers = async (req: Request, res: Response) => {
        const users = await this.userService.listUsers()
        res.json(users)
    }
}