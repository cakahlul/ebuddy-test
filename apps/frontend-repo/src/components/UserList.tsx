import { Stack } from '@mui/material';
import UserCard from './Card';
import { UserModel } from '@ebuddy-test/shared';

interface UserListProps {
  data: UserModel[];
  updateData: (user: Partial<UserModel>) => void;
}

export default function UserList({ data, updateData }: UserListProps) {
  const userData = (user: UserModel) => {
    const data = {
      name: user.name,
      email: user.email,
    };

    return (
      <UserCard
        key={user.id}
        data={data}
        isEditable={true}
        onSave={(updatedFields: Partial<UserModel>) => {
          updateData({ ...updatedFields, id: user.id });
        }}
      />
    );
  };
  return (
    <>
      <Stack spacing={2}>{data.map(user => userData(user))}</Stack>
    </>
  );
}
