import { model, Schema } from 'mongoose';
import { Message } from '../model/message.model';

const MessageSchema: Schema = new Schema<Message>({
  message: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default model<Message>('Message', MessageSchema);
