import ApiError from '../error/apiErrors.js';

export default function(role) {
  return function(req, res, next) {
    if (!req.user) {
      return next(ApiError.unauthorized('Foydalanuvchi aniqlanmadi'));
    }

    if (req.user.role !== role) {
      return next(ApiError.forbidden(`Sizga ruxsat yo'q (${role} kerak)`));
    }

    next();
  };
}
