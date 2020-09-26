var express = require("express");
const NegociosController = require("../controllers/NegociosController");

var router = express.Router();

// GET NEGOCIOS
router.get("/", NegociosController.getNegocios);

// GET NEGOCIO - ID
router.get("/:id", NegociosController.getNegocio);

// GET NEGOCIO - FOLIO
router.get("/folio/:folio", NegociosController.getNegocioByFolio);

// GET NEGOCIOS - AREA
router.get("/area/:area", NegociosController.getNegocioByArea);

// GET NEGOCIOS - ESTADO
router.get("/estado/:estado", NegociosController.getNegocioByEstado);

// GET NEGOCIOS - ESTADO
router.get("/estadonv/:estadonv", NegociosController.getNegocioByEstadoNv);

// GET NEGOCIOS - USUARIO
router.get("/usuario/:usuario", NegociosController.getNegocioByUsuario);


// GET NEGOCIOS - INTERVALO DE MESES (YYYY-MM - YYYY-MM)
router.get("/meses/:from/:to", NegociosController.getNegocioByMonth);

module.exports = router;