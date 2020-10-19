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
 * Get system info.
 * 
 * @returns {Object}
 */
exports.getSystemInfo = [
    // auth,
    function (req, res) {
        console.log('getSystemInfo - ' + req.params);
        var clientData = getUserData(req, res);
        if (!clientData) res.status(500).send({
            "msg": "No authorization token"
        });

        axios.get('http://' + clientData.ip + ':' + clientData.port + '/4DACTION/_api_get_system_info')
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error)
            })
    }
];