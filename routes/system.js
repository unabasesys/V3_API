var express = require("express");
const SystemControllers = require("../controllers/systemController");
var router = express.Router();



/**
 * @swagger
 * /v1/system:
 *  get:
 *    
 *    description: Devuelve  el resumen del sistema.
 *    tags: [SISTEMA]
 *    responses:
 *      '200':
 *        description: Data basica del sistema.
 */
router.get("/", SystemControllers.getSystemInfo);


module.exports = router;