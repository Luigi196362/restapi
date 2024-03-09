const {Router} = require ('express');
//const controllers = require ('../controllers');

const router = Router();

router.get('/',(req, res) => res.send ('Welcome'))
router.get('/pokemon',(req, res) => res.send ('Pikachu'))
router.get('/starwars',(req, res) => res.send ('R2D2'))



//router.post ('/users',controllers.createUser);
//router.get ('/users',controllers.getAllUsers);

module.exports = router;
