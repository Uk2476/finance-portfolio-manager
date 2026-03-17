import express from 'express';
import Creatennodes from '../controllers/Creatennodes.js';
import Getnotes  from '../controllers/Getnotes.js';
import UpdateSellingAmount from '../controllers/Update.js';

const router = express.Router();

router.get('/', Getnotes);

router.post('/', Creatennodes);

router.put('/selling/:id' , UpdateSellingAmount);


export default router;