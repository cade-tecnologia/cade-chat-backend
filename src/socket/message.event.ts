import { Socket } from 'socket.io';
import { Message } from '../model/message.model';
import { MessageController } from '../controller/message.controller';

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
    this.sendAll();
  }

  private receive = (): void => {
    this.socket.on('receiveMessage', async (socket: Socket) => {
      await MessageController.saveMessage(Object.assign({} as Message, socket));
    })
  };

  private sendAll = async (): Promise<void> => {
    this.socket.emit('sendMessage', await MessageController.getAllMessage());
  }
}
