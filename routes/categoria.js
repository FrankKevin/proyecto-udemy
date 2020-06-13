import routerx from 'express-promise-router';
import categoriacontroller from '../controllers/categoriacontroller';

const router=routerx();

router.post('/add',categoriacontroller.add);
router.get('/query',categoriacontroller.query);
router.get('/list',categoriacontroller.list);
router.put('/update',categoriacontroller.update);
router.delete('/remove',categoriacontroller.remove);
router.put('/activate',categoriacontroller.activate);
router.put('/deactivate',categoriacontroller.deactivate);

export default router;