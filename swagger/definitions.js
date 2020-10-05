module.exports = {
    // Extended: https://swagger.io/specification/#infoObject
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            version: "1.0.0",
            title: "Unabase V3 API",
            description: "API de conexion a Unabase V3",
            contact: {
                name: "Hector Gonzalez",
                email: "hector@unabase.com"
            },
            servers: ["https://v3api.herokuapp.com"]
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }]

    },
    apis: ["./routes/*.js"]

};