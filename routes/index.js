import routerx from 'express-promise-router';
import categoriarouter from './categoria';
import articulorouter from  './articulo';

const router=routerx();
router.use('/categoria',categoriarouter); //cuando se haga una peticion a la ruta /categoria le voy a indicar que se gestione las rutas con el objeto categoriarouter 
router.use('/articulo',articulorouter);
export default router;