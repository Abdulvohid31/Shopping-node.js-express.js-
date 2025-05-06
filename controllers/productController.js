import { Product } from "../models/models.js";
import { uuid } from "uuid";
import path from "path";
export const createProduct = async (req, res) => {
  const { name, price, brandId, typeId, info } = req.body;
  const { img } = req.files;
  let fileName = uuid.v4() + ".png";
  img.mv(path.resolve(__dirname, "..", "static", fileName));
  
  if (!name || !price || !brandId || !typeId || !info)
    return res.status(400).json({ error: "Missing fields" });
  const product = await Product.create({ name, price, img });
  return res.status(201).json(product);
};

export const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  return res.json(products);
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  return product
    ? res.json(product)
    : res.status(404).json({ error: "Not found" });
};
