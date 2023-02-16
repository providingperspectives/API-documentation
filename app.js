const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express (); 

const swaggerOptions ={
    swaggerDefinition: {
        info:{
        title: 'CSE-341 API',
        Version: '1.0.0'
    }
}, 
apis: ['app.js'],

};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 *  /course:
 *     get:
 *       description: Get all Course
 *       responses:
 *           200:
 *             description: Success
 * 
 * 
 */

app.get('/course', (req, res) => {
    res.send(
        [{
            id: CSE-341,
            title: 'Web-Backend 2'
        }]
    )
});

/**
 * @swagger
 *  /course:
 *     post:
 *       description: Create a new course 
 *       responses:
 *           201:
 *             description: Created
 * 
 */


app.post('/course', (req, res) => {res.status(201).send();

})





app.listen(8080, () => console.log("listening on 8080")); 
