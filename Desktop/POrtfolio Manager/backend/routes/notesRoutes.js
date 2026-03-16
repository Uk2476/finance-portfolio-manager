import express from 'express';
import Creatennodes from '../controllers/Creatennodes.js';
import {Getnotes , GetNotesById} from '../controllers/Getnotes.js';
import {UpdateNote , UpdateSellingAmount} from '../controllers/Update.js';

const router = express.Router();

router.get('/', Getnotes);

router.get('/:id' , GetNotesById);

router.post('/', Creatennodes);

router.put('/:id/buying' , UpdateNote);

router.put('/:id/selling' , UpdateSellingAmount);


export default router;