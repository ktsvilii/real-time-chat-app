import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const userToken = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '10d' });

  res.cookie('jwt', userToken, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development',
  });
};

export default generateTokenAndSetCookie;
