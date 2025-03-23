import { auth } from '../config/firebase.config';

export const authMiddleware = async (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Request Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = await auth.verifyIdToken(token);
    (req as any).user = { uid: decodedToken.uid };
    next();
  } catch (error) {
    console.error('Token verification error: ', error);
    res.status(401).json({ message: 'Request Unauthorized' });
  }
};
