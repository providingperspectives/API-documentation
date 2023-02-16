const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express (); 

const swaggerOptions ={
    swaggerDefinition: {
        info:{
        Title: 'CSE-341 API',
        Version: '1.0.0'
    }
}, 
apis: ['app.js'],

};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup,(swaggerDocs));

/**
 * @swagger
 *  /course:
 *     get:
 *       description: Get all Course work
 *       
 *       responses:
 *           200:
 *             description: Success
 * 
 */

app.get('/course', (req, res) => {
    res.send(
        [{
            id: 341,
            Title: 'Web-Backend 2'
        }]
    )
});


app.listen(8080, () => console.log("listening on 8080")); 
