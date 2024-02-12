import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { Container } from 'typedi'

const userController = Container.get(UserController)

const userRouter = Router()

userRouter.get('/', userController.listUsers)

export default userRouter