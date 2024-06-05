import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET_ACCESS_KEY;
const dotenv = require('dotenv');

dotenv.config();
// access Token 발급
const sign = (userdata) => {
  
    return jwt.sign(userdata, secret, {
        algorithm:process.env.JWT_ALGORITHM,
        expiresIn:process.env.JWT_ACCESS_EXPIRE
  });
};

// access Token 검증
const verify = (token) => {
  let decoded = null;
  try {
    decoded = jwt.verify(token, secret);
    return {
      ok: true,
      userEmail: decoded.id,
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
};

// refresh Token 발급
const refresh = (userId) => {
    return jwt.sign({ id: userEmail }, secret, {
        algorithm:process.env.JWT_ALGORITHM,
        expiresIn:process.env.JWT_ACCESS_EXPIRE
  });
};

const refreshVerify = (token) => {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports =  { sign, verify, refresh, refreshVerify };