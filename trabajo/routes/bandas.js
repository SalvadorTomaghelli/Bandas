let express= require('express')
let router = express.Router()
let bandasController= require('../controllers/bandasController')

router.get('/', bandasController.index)










module.exports = router