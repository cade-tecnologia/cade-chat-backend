import { Message } from '../model/message.model';
import MessageSchema from '../schema/message.schema';

/**
 * - Class
 * An class named with Controller are business related.
 * They are the ones who handle the messages
 * - Methods
 * Controller's method needs to be static.
 * Controller's methods handle the database access
 * and business logic
 */
export class MessageController {
  public static saveMessage = async (msg: Message): Promise<void> => {
    try {
      await MessageSchema.create(msg);
    } catch (e) {
      console.trace(e);
    }
  };

  public static getAllMessage = async (): Promise<Message[] | undefined> => {
    try {
      return await MessageSchema.find()
    } catch (e) {
      console.trace(e);
    }
  };
}
