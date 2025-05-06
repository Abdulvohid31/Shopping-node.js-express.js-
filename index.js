import express from "express";
import dotenv from "dotenv";
import sequelize from "./db.js";
import { Users } from "./models/models.js";
import cors from 'cors'
import router from "./routes/indexRouter.js";
import errorHandler from './middleware/handlemiddleware.js';
import fileUpload from "express-fileupload";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(fileUpload({}))
app.use(errorHandler);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';

// ✅ Register endpoint for Postman testing
app.post("/api/register", async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await Users.create({ phone, password });
    res.status(201).json(user);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({ message: "Registration failed", error });
  }
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false }); // set to true only if you want to reset tables
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error("DB connection failed:", error);
  }
};

start();
