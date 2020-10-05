var express = require("express");
const NegociosController = require("../controllers/NegociosController");
var router = express.Router();



/**
 * @swagger
 * /v1/negocios:
 *  get:
 *    
 *    description: Devuelve todos los negocios.
 *    tags: [NEGOCIOS]
 *    responses:
 *      '200':
 *        description: Negocios list []
 */
router.get("/", NegociosController.getNegocios);

/**
 * @swagger
 * /v1/negocios/{id}:
 *  get:
 *
 *    description: Devuelve un negocio por su id.
 *    tags: [NEGOCIO]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: id del negocio
 *    responses:
 *      '200':
 *        description: Negocio object
 */
router.get("/:id", NegociosController.getNegocio);

/**
 * @swagger
 * /v1/negocios/folio/{folio}:
 *  get:
 *
 *    description: Devuelve un negocio por su numero de folio.
 *    tags: [NEGOCIO]
 *    parameters:
 *       - in: path
 *         name: folio
 *         schema:
 *          type: string
 *         required: true
 *         description: Numero de folio del negocio
 *    responses:
 *      '200':
 *        description: Negocio object
 */
router.get("/folio/:folio", NegociosController.getNegocioByFolio);

/**
 * @swagger
 * /v1/negocios/area/{area}:
 *  get:
 *
 *    description: Devuelve los negocios de un area especifica.
 *    tags: [NEGOCIOS]
 *    parameters:
 *       - in: path
 *         name: area
 *         schema:
 *          type: string
 *         required: true
 *         description: Numero de area a la que pertenece el negocio.
 *    responses:
 *      '200':
 *        description: Negocio object
 */
router.get("/area/:area", NegociosController.getNegocioByArea);

/**
 * @swagger
 * /v1/negocios/estado/{estado}:
 *  get:
 *
 *    description: Devuelve los negocios de acuerdo a su estado.
 *    tags: [NEGOCIOS]
 *    parameters:
 *       - in: path
 *         name: estado
 *         schema:
 *          type: string
 *         required: true
 *         description: Estado del documento ("negocio", "cotizacion").
 *    responses:
 *      '200':
 *        description: Negocios list
 */
router.get("/estado/:estado", NegociosController.getNegocioByEstado);

/**
 * @swagger
 * /v1/negocios/estadonv/{estadonv}:
 *  get:
 *
 *    description: Devuelve los negocios de acuerdo a su estadonv.
 *    tags: [NEGOCIOS]
 *    parameters:
 *       - in: path
 *         name: estadonv
 *         schema:
 *          type: string
 *         required: true
 *         description: Estado del documento ("proceso", "cerrado").
 *    responses:
 *      '200':
 *        description: Negocios list
 */
router.get("/estadonv/:estadonv", NegociosController.getNegocioByEstadoNv);

/**
 * @swagger
 * /v1/negocios/usuario/{usuario}:
 *  get:
 *
 *    description: Devuelve los negocios de un usuario.
 *    tags: [NEGOCIOS]
 *    parameters:
 *       - in: path
 *         name: usuario
 *         schema:
 *          type: string
 *         required: true
 *         description: Usuario ("sactoca", "singg", etc...).
 *    responses:
 *      '200':
 *        description: Negocios list
 */
router.get("/usuario/:usuario", NegociosController.getNegocioByUsuario);

/**
 * @swagger
 * /v1/negocios/items/{negocio_id}:
 *  get:
 *
 *    description: Devuelve los items de un negocio.
 *    tags: [ITEMS]
 *    parameters:
 *       - in: path
 *         name: negocio_id
 *         schema:
 *          type: string
 *         required: true
 *         description: id del negocio en cuestión.
 *    responses:
 *      '200':
 *        description: Items list
 */
router.get("/items/:negocio_id", NegociosController.getNegocioItems);

// GET NEGOCIOS - INTERVALO DE MESES (YYYY-MM - YYYY-MM)

/**
 * @swagger
 * /v1/negocios/meses/{from}/{to}:
 *  get:
 *
 *    description: Devuelve los negocios en un intervalo de tiempo.
 *    tags: [NEGOCIOS]
 *    parameters:
 *       - in: path
 *         name: from
 *         schema:
 *          type: string
 *         required: true
 *         description: Fecha en formato (YYYY-MM) - desde
 *       - in: path
 *         name: to
 *         schema:
 *          type: string
 *         required: true
 *         description: Fecha en formato (YYYY-MM) - hasta
 *         
 *    responses:
 *      '200':
 *        description: Negocios list
 */
router.get("/meses/:from/:to", NegociosController.getNegocioByMonth);

module.exports = router;