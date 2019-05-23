import { Router } from 'express';
import { Message } from './util/endpoints';
import { MessageController } from './controller/message.controller';

const router = Router();

router.get(Message.RESOURCE, MessageController.getAllMessage);

export default router;
