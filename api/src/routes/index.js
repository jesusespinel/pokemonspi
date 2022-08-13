const { Router } = require('express');
const pokemonRouter = require ('./Pokemon.js')
const typeRouter = require('./Types.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemon',pokemonRouter)
router.use('/types',  typeRouter)

   



module.exports = router;
