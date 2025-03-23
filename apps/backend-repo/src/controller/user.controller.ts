import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private userService: UserService) {}

  async getAll(request: Request, response: Response): Promise<void> {
    try {
      const userList = await this.userService.getAll();

      response.json(userList);
    } catch (error) {
      this.handleGeneralError(error, response);
    }
  }

  async update(request: Request, response: Response): Promise<void> {
    try {
      const { id } = request.params;
      const { body } = request;
      const updatedUser = await this.userService.update(id, body);

      response.json(updatedUser);
    } catch (error) {
      this.handleGeneralError(error, response);
    }
  }

  private handleGeneralError(error: unknown, response: Response) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}
