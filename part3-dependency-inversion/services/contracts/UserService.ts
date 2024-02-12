import { User } from "../../models/User";

export interface UserService {
    listUsers(): Promise<User[]>
}