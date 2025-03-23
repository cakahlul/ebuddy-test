import { onRequest } from 'firebase-functions/https';
import app from './core/app';

const port = 3001;
app.listen(port, () => {
  console.log(`Service running on ${port}`);
});

//Wrap into firebase functions
export const api = onRequest(
  {
    region: 'asia-southeast1',
  },
  app,
);
