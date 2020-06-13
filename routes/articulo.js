import routerx from 'express-promise-router';
import articulocontroller from '../controllers/articulocontroller';

const router=routerx();

router.post('/add',articulocontroller.add);
router.get('/query',articulocontroller.query);
router.get('/list',articulocontroller.list);
router.put('/update',articulocontroller.update);
router.delete('/remove',articulocontroller.remove);
router.put('/activate',articulocontroller.activate);
router.put('/deactivate',articulocontroller.deactivate);

export default router;