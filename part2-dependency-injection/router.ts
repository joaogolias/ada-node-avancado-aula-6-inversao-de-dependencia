import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { UserService } from './services/UserService'

const userService = new UserService()
const userController = new UserController(userService)

const userRouter = Router()

userRouter.get('/', userController.listUsers)


export default userRouter