import { UserRepository } from './user.repository';
import { AxiosInstance } from 'axios';
import createAuthorizedHttpClient from '@src/lib/httpClient';
import { UserModel } from '@ebuddy-test/shared';

export class UserApiRepository implements UserRepository {
  private baseUrl: string;
  private httpClient: AxiosInstance;

  constructor() {
    this.baseUrl =
      process.env.NEXT_PUBLIC_USER_SERVICE || 'http://localhost:3000';
    this.httpClient = createAuthorizedHttpClient(this.baseUrl);
  }

  async getAll(): Promise<UserModel[]> {
    const response = await this.httpClient.get<UserModel[]>(
      `${this.baseUrl}/user/fetch-user-data`,
    );
    return response.data;
  }

  async update(id: string, user: Partial<UserModel>): Promise<UserModel> {
    const response = await this.httpClient.put<UserModel>(
      `${this.baseUrl}/user/update-user-data/${id}`,
      user,
    );
    return response.data;
  }
}
