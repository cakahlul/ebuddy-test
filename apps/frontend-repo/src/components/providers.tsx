'use client';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from '../store/store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CssBaseline />
      {children}
    </Provider>
  );
}
