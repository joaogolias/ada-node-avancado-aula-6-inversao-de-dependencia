import { User } from "../models/User";

export class UserService {
    public async listUsers(): Promise<User[]> {
        return [{ id: '1', name: 'Ada' }, { id: '2', name: 'Pablo'}]
    }
}