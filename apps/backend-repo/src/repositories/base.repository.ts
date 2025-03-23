export abstract class BaseRepository<T> {
  abstract create(entity: T): Promise<T>;
  abstract update(id: string | number, entity: Partial<T>): Promise<T | null>;
  abstract delete(id: string | number): Promise<boolean>;
  abstract findById(id: string | number): Promise<T>;
  abstract findAll(): Promise<T[]>;
}
