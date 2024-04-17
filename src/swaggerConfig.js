import swaggerJsdoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    info: {
      title: "API NodeJS",
      version: "1.0.0",
      description: "Bienvenue sur la doc de l'API NodeJS",
    },
  },
  apis: ["/routes/clothesRoute.js"],
};

const specs = swaggerJsdoc(options);

export default specs;
