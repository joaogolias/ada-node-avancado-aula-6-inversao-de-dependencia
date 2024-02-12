import { Token } from "typedi";
import { User } from "../../models/User";

export const UserService = new Token("UserService")
export interface UserService {
    listUsers(): Promise<User[]>
}