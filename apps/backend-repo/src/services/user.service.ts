import { UserModel } from '@ebuddy-test/shared';
import { User } from '../entities/user.entity';
import UserRepository from '../repositories/user.repository';

export default class UserService {
  constructor(private userRepository: UserRepository) {}

  async getAll(): Promise<UserModel[]> {
    const users = await this.userRepository.findAll();
    return users.map((user: User) => this.toModel(user));
  }

  async update(id: string, user: Partial<User>): Promise<UserModel | null> {
    const updatedData = await this.userRepository.update(id, user);
    if (!updatedData) return null;
    return this.toModel(updatedData);
  }

  private toModel(user: User): UserModel {
    return {
      id: user.uid,
      email: user.email,
      name: user.name,
      numberOfRents: user.numberOfRents,
      recentlyActive: user.recentlyActive,
      totalAverageWeightRatings: user.totalAverageWeightRatings,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
