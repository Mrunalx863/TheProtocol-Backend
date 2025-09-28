import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
  const token = jwt.sign(
    { userId }, // payload
    process.env.JWT_SECRET, // secret key
    { expiresIn: '1d' } // options
  );
  
  const isProduction = process.env.NODE_ENV === 'production';
  
  res.cookie('jwt', token, {
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
    httpOnly: true,
    sameSite: isProduction ? 'none' : 'lax', // 'none' required for cross-origin
    secure: isProduction, // true for HTTPS in production
    // Don't set domain - let browser handle it
  });
  
  // console.log('Cookie settings:', {
  //   isProduction,
  //   sameSite: isProduction ? 'none' : 'lax',
  //   secure: isProduction,
  // });
  
  return token;
};