import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (res, req, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      res.status(401).json({ error: 'Unauthorized user' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(401).json({ error: 'Invalid token' });
    }

    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default protectRoute;
