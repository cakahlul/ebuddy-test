import { db } from '../config/firebase.config';
import { User } from '../entities/user.entity';
import { BaseRepository } from './base.repository';
import { UpdateData } from 'firebase-admin/firestore';

const usersCollection = db.collection('user');

export default class UserRepository extends BaseRepository<User> {
  async create(entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async update(
    id: string | number,
    entity: Partial<User>,
  ): Promise<User | null> {
    try {
      const docRef = usersCollection.doc(id.toString());
      const updateData: UpdateData<User> = {
        ...entity,
        updatedAt: new Date(),
      };
      await docRef.update(updateData);

      const docSnapshot = await docRef.get();
      if (!docSnapshot.exists) {
        return null;
      }

      return {
        uid: docSnapshot.id,
        ...docSnapshot.data(),
      } as User;
    } catch (error) {
      console.error('Error updating user:', error);
      return null;
    }
  }

  async delete(id: string | number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string | number): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<User[]> {
    const snapshots = await usersCollection.get();
    return snapshots.docs.map(doc => {
      return {
        uid: doc.id,
        ...doc.data(),
      } as User;
    });
  }
}
