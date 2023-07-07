import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

//Metadata info about out API
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Papeleria en linea Huauchinango API",
            version: "1.0.0"
        },
        
    },
    apis: [
        "src/routes/upload.routes.js",
        "src/routes/auth.routes.js"
    ]
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app, port) => {
    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

    console.log(
        `📓 Version 1 Docs are available at http://localhost:${port}/api/docs`
    );
};