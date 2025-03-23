'use client';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@src/config/firebase';
import { Box, Paper, Typography } from '@mui/material';
import RefreshButton from '@src/components/RefreshButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess,
  selectListUsers,
  selectUsersError,
  selectUsersLoading,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from '@src/store/user.slice';
import UserList from '@src/components/UserList';
import ListSkeleton from '@src/components/ListSkeleton';
import { UserApiRepository } from '@src/repositories/user.api.repository';
import { UserModel } from '@ebuddy-test/shared';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const listUser = useSelector(selectListUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  const fetchUsers = useCallback(async () => {
    const userRepository = new UserApiRepository();
    try {
      dispatch(fetchUserStart());
      const users = await userRepository.getAll();
      dispatch(fetchUserSuccess(users));
    } catch (err) {
      dispatch(fetchUserFailure(String(err)));
    }
  }, [dispatch]);

  const updateData = async (user: Partial<UserModel>) => {
    const userRepository = new UserApiRepository();
    try {
      dispatch(updateUserStart());
      const updatedUser = await userRepository.update(user.id!, user);
      dispatch(updateUserSuccess(updatedUser));
    } catch (error) {
      dispatch(updateUserFailure(String(error)));
    }
  };

  useEffect(() => {
    dispatch(fetchUserStart());
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) router.push('/login');
      fetchUsers();
    });
    return () => unsubscribe();
  }, [router, fetchUsers, dispatch]);

  const handleRefresh = async () => {
    await fetchUsers();
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <RefreshButton isLoading={loading} handleRefresh={handleRefresh} />
        {loading && <ListSkeleton />}
        {error && (
          <Typography color="error" gutterBottom>
            Error: {error}
          </Typography>
        )}
        {!loading && listUser && listUser.length > 0 && (
          <UserList data={listUser} updateData={updateData} />
        )}
        {!loading && listUser && listUser.length === 0 && (
          <Typography variant="body1">No users found</Typography>
        )}
      </Paper>
    </Box>
  );
}
