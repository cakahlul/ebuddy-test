import axios from 'axios';
import { getAuth } from 'firebase/auth';

const createAuthorizedHttpClient = (baseUrl: string) => {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  instance.interceptors.request.use(async config => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return instance;
};

export default createAuthorizedHttpClient;
