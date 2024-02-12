import { Container } from 'typedi';
import { UserServiceHandler } from '../services/UserServiceHandler';
import { UserService } from '../services/contracts/UserService';

export const setupContainer = () => {
    const userServiceHandler = Container.get(UserServiceHandler)
    Container.set(UserService, userServiceHandler)
}