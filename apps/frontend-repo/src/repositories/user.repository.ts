import { UserModel } from '@ebuddy-test/shared';
export interface UserRepository {
  getAll(): Promise<UserModel[]>;
  update(id: string, user: Partial<UserModel>): Promise<UserModel>;
}
