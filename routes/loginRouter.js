import jwt from 'jsonwebtoken';
import { Users } from './models/models.js'; // to'g'ri path bo'lishi kerak

const generateJwt = (id, phone) => {
  return jwt.sign({ id, phone }, process.env.JWT_SECRET, { expiresIn: '24h' });
};

app.post("/api/login", async (req, res) => {
  try {
    const { phone, password } = req.body;

    const user = await Users.findOne({ where: { phone } });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Login yoki parol noto‘g‘ri" });
    }

    const token = generateJwt(user.id, user.phone);
    return res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
});