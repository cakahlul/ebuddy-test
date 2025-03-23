import express from 'express';
import UserRepository from '../repositories/user.repository';
import UserService from '../services/user.service';
import UserController from '../controller/user.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const userRouter = express.Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.use(authMiddleware);
userRouter.get('/fetch-user-data', userController.getAll.bind(userController));
userRouter.put(
  '/update-user-data/:id',
  userController.update.bind(userController),
);

export default userRouter;
