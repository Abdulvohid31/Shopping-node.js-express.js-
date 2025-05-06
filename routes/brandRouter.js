/**
 * @swagger
 * tags:
 *   name: Brands
 *   description: Brandlarni boshqarish

 * /brand:
 *   post:
 *     summary: Yangi brand yaratish
 *     tags: [Brands]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Apple
 *     responses:
 *       200:
 *         description: Yaratilgan brand

 *   get:
 *     summary: Barcha brandlarni olish
 *     tags: [Brands]
 *     responses:
 *       200:
 *         description: Brandlar ro'yxati

 * /brand/{id}:
 *   put:
 *     summary: Brandni yangilash
 *     tags: [Brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Brand ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Samsung
 *     responses:
 *       200:
 *         description: Yangilangan brand

 *   delete:
 *     summary: Brandni o'chirish
 *     tags: [Brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Brand ID
 *     responses:
 *       200:
 *         description: O'chirish muvaffaqiyatli
 */


import { Router } from "express";
import brandController from "../controllers/brandController.js";

const router = new Router();

router.post('/', brandController.create);
router.get('/', brandController.getAll);
router.put('/:id', brandController.update);  // 🔧 PUT
router.delete('/:id', brandController.delete); // ❌ DELETE

export default router;
