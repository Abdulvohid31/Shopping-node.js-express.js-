import { Brand } from '../models/models.js';
import ApiError from '../error/apiErrors.js';

class BrandController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      if (!name) {
        return next(ApiError.badRequest('Brand nomi kerak'));
      }

      const brand = await Brand.create({ name });
      return res.json(brand);
    } catch (e) {
      next(e);
    }
  }

  async getAll(req, res, next) {
    try {
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const brand = await Brand.findByPk(id);
      if (!brand) return next(ApiError.notFound('Brand topilmadi'));

      brand.name = name || brand.name;
      await brand.save();
      return res.json(brand);
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const brand = await Brand.findByPk(id);
      if (!brand) return next(ApiError.notFound('Brand topilmadi'));

      await brand.destroy();
      return res.json({ 
        message: 'Brand o‘chirildi',
        status: "OK",
        succes: "true"
    });
    } catch (e) {
      next(e);
    }
  }
}

export default new BrandController();
