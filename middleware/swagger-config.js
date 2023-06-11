const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Passez au Full Stack avec Node.js..........',
            version: '1.0.0',
            description: 'API documentation for Passez au Full Stack avec Node.js, Express, MongoDB et Swagger',
            contact: {
                name: "Marx LORDEUS",
                url: "https://maxgarylordeus.com",
                email: "info@gmail.com",
            },
        },
        servers: [
            {
              url: "http://localhost:3000",
              description: 'Development server',
            },
        ],
    },
    apis: ['./routes/*.js'], // Specify the paths to your Express route files
};

const specs = swaggerJsDoc(options);

module.exports = specs;
