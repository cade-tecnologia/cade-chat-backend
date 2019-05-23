import { model, Schema } from 'mongoose';
import Paginate from 'mongoose-paginate-v2';
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
    required: true,
  },
});

MessageSchema.plugin(Paginate);

export default model<Message>('Message', MessageSchema);
