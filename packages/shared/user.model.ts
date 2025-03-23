export interface UserModel {
  id: string;
  email: string;
  name: string;
  numberOfRents: number;
  recentlyActive: Date;
  totalAverageWeightRatings: number;
  createdAt: Date;
  updatedAt: Date;
}
