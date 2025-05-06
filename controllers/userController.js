import ApiError from '../error/apiErrors.js';

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return next(ApiError.badRequest('Email, password va role majburiy'));
    }

    // TODO: bu yerda foydalanuvchini yaratish logikasi bo'ladi
    return res.json({ message: 'Foydalanuvchi ro‘yxatdan o‘tdi' });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Email va password majburiy'));
    }

    // TODO: bu yerda login logikasi bo‘ladi
    return res.json({ token: 'fake-jwt-token' });
  }

  async check(req, res) {
    return res.json({ message: 'Token tekshirildi' });
  }
}

export default new UserController();
