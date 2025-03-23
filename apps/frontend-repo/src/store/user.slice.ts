import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { UserModel } from '@ebuddy-test/shared';

export interface UserState {
  listUser: UserModel[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  listUser: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action: PayloadAction<UserModel[]>) {
      state.listUser = action.payload;
      state.loading = false;
    },
    fetchUserFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess(state, action: PayloadAction<UserModel>) {
      const updatedUser = action.payload;
      state.listUser = state.listUser.map(user =>
        user.id === updatedUser.id ? updatedUser : user,
      );
      state.loading = false;
    },
    updateUserFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const selectUserState = (state: RootState) => state.user;
export const selectListUsers = createSelector(
  selectUserState,
  user => user.listUser,
);
export const selectUsersLoading = createSelector(
  selectUserState,
  user => user.loading,
);
export const selectUsersError = createSelector(
  selectUserState,
  user => user.error,
);
export const selectUserById = (userId: string) =>
  createSelector(selectListUsers, users =>
    users.find(user => user.id === userId),
  );

export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
