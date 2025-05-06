import { Type } from '../models/models.js';
import ApiError from '../error/apiErrors.js';


class TypeController {
  async create(req, res, next) {
    const { name } = req.body;
    if (!name) {
      return next(ApiError.badRequest('Type name is required'));
    }

    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

export default new TypeController();
