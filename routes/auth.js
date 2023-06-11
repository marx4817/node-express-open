const express = require("express")
const userCtrl = require("../controllers/user")

const router = express.Router()

/**
 * @openapi
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - password
 *              - email
 *          properties:
 *              email: 
 *                  type: string
 *              password:
 *                  type: string
 */

/**
 * @swagger
 * tags:
 *     name: Auth
 *     description: Auth endpoint manager
*/

/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *      summary: register a new user
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              userId:
 *                                  type: string
 *                              token:
 *                                  type: string
 *          400:
 *              description: bad request
 *          500:
 *              description: server error
 */
router.post("/signup", userCtrl.signup)

/**
 * @openapi
 * /api/auth/login:
 *  post:
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              useId:
 *                                 type: string
 *                              accessToken:
 *                                  type: string
 */
router.post("/login", userCtrl.login)


router.get("/all", userCtrl.allUsers)

module.exports = router