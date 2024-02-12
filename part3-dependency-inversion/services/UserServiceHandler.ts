import { User } from "../models/User";
import { UserService } from "./contracts/UserService";

export class UserServiceHandler implements UserService {
    public async listUsers(): Promise<User[]> {
        return [{ id: '1', name: 'Ada' }, { id: '2', name: 'Pablo'}]
    }
}