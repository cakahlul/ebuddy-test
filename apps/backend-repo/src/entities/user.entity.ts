export interface User {
  uid: string;
  email: string;
  name: string;
  numberOfRents: number;
  recentlyActive: Date;
  totalAverageWeightRatings: number;
  createdAt: Date;
  updatedAt: Date;
}
