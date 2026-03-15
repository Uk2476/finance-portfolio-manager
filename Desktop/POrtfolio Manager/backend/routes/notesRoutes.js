import express from 'express';
import { getnnodes , creatennodes , updatennodes , deletennodes , getnnodesById } from '../controllers/notesControllers.js';

const router = express.Router();

router.get('/', getnnodes);

router.get('/:id' , getnnodesById);

router.post('/', creatennodes);

router.put('/:id' , updatennodes);

router.delete('/:id' , deletennodes);

export default router;