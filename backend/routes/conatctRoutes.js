import express from 'express';
import * as conatctController from '../controller/contactController.js';

const router = express.Router();

router.post('/', conatctController.submitForm);
router.get('/', conatctController.allMessages);


export default router;