let express= require('express')
let router = express.Router()
let bandasController= require('../controllers/bandasController')

router.get('/', bandasController.index)
router.get('/:id?', bandasController.show)

// router.get('/id/:id?', bandasController.index)










module.exports = router