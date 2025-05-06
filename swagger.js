// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Shopping Backend API',
    version: '1.0.0',
    description: 'Bu API Shopping-backend uchun yaratilgan.',
  },
  servers: [
    {
      url: 'http://localhost:5000/api',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // faqat route fayllarida yozilgan komentariyalarni o'qiydi
};

export const swaggerSpec = swaggerJSDoc(options);
