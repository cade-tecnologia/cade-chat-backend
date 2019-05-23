import { Socket } from 'socket.io';
import { Message } from '../model/message.model';
import { MessageController } from '../controller/message.controller';
import SocketEventUtil from '../util/socket-event.util';

/**
 * - Class
 * An class named with Event can have Emit or On methods;
 * every Event class needs to receive
 * a Socket in their constructor
 * - Methods
 * the methods are just to pass
 * the messages to the client. Handling the message
 * (saving, finding, deleting, etc) are done by theirs related
 * Controllers
 */
export class MessageEvent {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;

    this.receive();
  }

  private receive = (): void => {
    this.socket.on(SocketEventUtil.RECEIVE, async (socket: Socket) => {
      const msg = await MessageController.saveMessage(Object.assign({} as Message, socket));
      this.sendRecentMsg(msg!);
    })
  };

  private sendRecentMsg = (message: Message): void => {
    this.socket.broadcast.emit(SocketEventUtil.RECENT_MESSAGE, message);
    this.socket.emit(SocketEventUtil.RECENT_MESSAGE, message);
  };
}
