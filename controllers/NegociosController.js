const axios = require('axios');
var jwt_simple = require('jwt-simple');
const {
    body,
    validationResult
} = require("express-validator");
const {
    sanitizeBody
} = require("express-validator");
const {
    months
} = require('moment');
const auth = require("../middlewares/jwt");

function getUserData(req, res) {
    if (req.headers.authorization) {
        let tkn = req.headers.authorization.split(' ');
        var decoded = jwt_simple.decode(tkn[1], process.env.JWT_SECRET);
        console.log(decoded);
        return decoded;
    } else {
        return false;
    }

}



/**
 * Get Negocios.
 * 
 * @returns {Object}
 */
exports.getNegocios = [
    auth,
    function (req, res) {
        console.log('getNegocios');
        var clientData = getUserData(req, res);
        if (!clientData) res.status(500).send({
            "msg": "No authorization token"
        });

        axios.get('http://' + clientData.ip + ':' + clientData.port + '/4DACTION/_api_get_negocios')
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error)
            })
    }
];


/**
 * Get Negocio.
 * 
 * @returns {Object}
 */
exports.getNegocio = [
    auth,
    function (req, res) {
        console.log('getNegocio - ' + req.params.id);
        var clientData = getUserData(req, res);
        if (!clientData) res.status(500).send({
            "msg": "No authorization token"
        });

        axios.get('http://' + clientData.ip + ':' + clientData.port + '/4DACTION/_api_get_negocios?id=' + req.params.id)
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error)
            })
    }
];



/**
 * Get Negocio by folio.
 * 
 * @returns {Object}
 */
exports.getNegocioByFolio = [
    auth,
    function (req, res) {
        console.log('getNegocioByFolio - ' + req.params.folio);
        var clientData = getUserData(req, res);
        if (!clientData) res.status(500).send({
            "msg": "No authorization token"
        });

        axios.get('http://' + clientData.ip + ':' + clientData.port + '/4DACTION/_api_get_negocios?folio=' + req.params.folio)
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error)
            })
    }
];


/**
 * Get Negocio by area.
 * 
 * @returns {Object}
 */
exports.getNegocioByArea = [
    auth,
    function (req, res) {
        console.log('getNegocioByArea - ' + req.params.area);
        var clientData = getUserData(req, res);
        if (!clientData) res.status(500).send({
            "msg": "No authorization token"
        });

        axios.get('http://' + clientData.ip + ':' + clientData.port + '/4DACTION/_api_get_negocios?area=' + req.params.area)
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error)
            })
    }
];

/**
 * Get Negocio by estado.
 * 
 * @returns {Object}
 */
exports.getNegocioByEstado = [
    // auth,
    function (req, res) {
        console.log('getNegocioByEstado - ' + req.params.estado);
        var clientData = getUserData(req, res);
        if (!clientData) res.status(500).send({
            "msg": "No authorization token"
        });

        axios.get('http://' + clientData.ip + ':' + clientData.port + '/4DACTION/_api_get_negocios?estado=' + req.params.estado)
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error)
            })
    }
];


/**
 * Get Negocio by estado_nv.
 * 
 * @returns {Object}
 */
exports.getNegocioByEstadoNv = [
    // auth,
    function (req, res) {
        console.log('getNegocioByEstadoNv - ' + req.params.estadonv);
        var clientData = getUserData(req, res);
        if (!clientData) res.status(500).send({
            "msg": "No authorization token"
        });

        axios.get('http://' + clientData.ip + ':' + clientData.port + '/4DACTION/_api_get_negocios?estadonv=' + req.params.estadonv)
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error)
            })
    }
];




/**
 * Get Negocio by usuario.
 * 
 * @returns {Object}
 */
exports.getNegocioByUsuario = [
    // auth,
    function (req, res) {
        console.log('getNegocioByUsuario - ' + req.params.usuario);
        var clientData = getUserData(req, res);
        if (!clientData) res.status(500).send({
            "msg": "No authorization token"
        });

        axios.get('http://' + clientData.ip + ':' + clientData.port + '/4DACTION/_api_get_negocios?usuario=' + req.params.usuario)
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error)
            })
    }
];


/**
 * Get Negocio by month.
 * 
 * @returns {Object}
 */
exports.getNegocioByMonth = [
    // auth,
    function (req, res) {
        console.log('getNegocioByMonth - ' + req.params);
        var clientData = getUserData(req, res);
        if (!clientData) res.status(500).send({
            "msg": "No authorization token"
        });

        axios.get('http://' + clientData.ip + ':' + clientData.port + '/4DACTION/_api_get_negocios?datefrom=' + req.params.from + '&dateto=' + req.params.to + '')
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error)
            })
    }
];