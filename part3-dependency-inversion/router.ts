import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { UserServiceHandler } from './services/UserServiceHandler'

const userService = new UserServiceHandler()
const userController = new UserController(userService)

const userRouter = Router()

userRouter.get('/', userController.listUsers)


export default userRouter