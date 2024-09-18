//Importa o módulo Router do express
//Router será utilizada para definir rotas específicas
const router = require('express').Router();

const ControllerNumber = require('../controllers/ControllerNumber');

router.post("/par/", ControllerNumber.checkPar);
router.post("/primo/", ControllerNumber.checkPrimo);


module.exports = router
