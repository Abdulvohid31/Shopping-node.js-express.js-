import jwt from 'jsonwebtoken';
import ApiError from '../error/apiErrors.js';

export default function (req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return next(ApiError.unauthorized('Token topilmadi'));

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return next(ApiError.unauthorized('Token yaroqsiz'));
  }
}
