import { Response, Request } from 'express';
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
  public static saveMessage = async (msg: Message): Promise<Message | undefined> => {
    try {
      return await MessageSchema.create(msg);
    } catch (e) {
      console.trace(e);
    }
  };

  // @ts-ignore
  public static getAllMessage = async (req: Request, res: Response): Promise<Response> => {
    try {
      // @ts-ignore
      const msg = await MessageSchema.paginate({}, {
        page: req.query.page,
        limit: req.query.limit,
        sort: { createdAt: -1},
      });
      return res.status(200).json(msg);
    } catch (e) {
      console.trace(e);
      return res.status(500).json(ServerErrorMessageUtil.INTERNAL_ERROR);
    }
  };
}
