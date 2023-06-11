const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth")
const multer = require("../middleware/multer-config")

const stuffCtrl = require('../controllers/stuff');

/**
 * @swagger
 * components:
 *  schemas:
 *      Thing:
 *          type: object
 *          required:
 *              - title
 *              - price
 *              - userId
 *              - imageUrl
 *              - description
 *          properties:
 *              title:
 *                  type: string
 *              price:
 *                  type: number
 *                  format: integer
 *              imageUrl:
 *                  type: string
 *                  description: Url
 *              userId:
 *                  type: string
 *                  description: price of the thing
 *              description:
 *                  type: string
 *                  description: price of the thing
 */

/**
 * @swagger
 * tags:
 *  name: Stuff
 *  description: Stuff endpoint manager
 */

/**
 * @swagger
 * /api/stuff:
 *   get:
 *      summary: List of the stuffs
 *      tags: [Stuff]
 *      responses:
 *          200:
 *              description: the list of the stuff
 *              content:
 *               application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Thing'
 *          401:
 *              description: Unauthorized
 *          400:
 *              description: dlskdlsl
 */

router.get('/', auth, stuffCtrl.getAllStuff);

/**
 * @swagger
 * /api/stuff:
 *  post:
 *      summary: create a new Stuff
 *      tags: [Stuff]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Thing'
 *      responses:
 *          201:
 *              description: created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Thing'
 *          404:
 *              description: Unauthorized
 *          400:
 *              description: bad request
 *          500: 
 *              description: server error
 *            
 */
router.post('/', auth, multer, stuffCtrl.createThing);

/**
 * @swagger
 * /api/stuff/{id}:
 *  get:
 *      summary: save a new stuff
 *      tags: [Stuff]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true  
 *            description: the stuff id
 *      responses:
 *          200:
 *              description: the stuff of the id
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Thing'
 *          404:
 *              description: stuff not found
 */
router.get('/:id', auth, stuffCtrl.getOneThing);

/**
 * @swagger
 * /api/stuff:
 *  put:
 *      summary: Update a stuff by id
 *      tags: [Stuff]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Thing'
 *      responses:
 *          200:
 *              description: updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Thing'
 *          401:
 *              description: Unauthorized
 *          404:
 *              description: osoos
 *          500:
 *              description: server error
 */
router.put('/:id', auth, multer, stuffCtrl.modifyThing);

/**
 * @swagger
 * /api/stuff/{id}:
 *  delete:
 *      summary: delete a stuff
 *      tags: [Stuff]
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *      responses:
 *          200:
 *              description: Deleted
 *          404:
 *              description: not found
 *          401:
 *              description: Unauthorized
 */
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;