import SocketIo from 'socket.io';
import { Socket } from 'socket.io';
import * as http from 'http';
import { MessageEvent } from './message.event';

export class CreateSocket {
  private io: SocketIo.Server;

  constructor(io: http.Server) {
    this.io = SocketIo.listen(io, {
      path: '/socket.io',
    });
    this.mainConnect();
  }

  /**
   * Main connection.
   * Every connection needs to be
   * instantiated here.
   */
  private mainConnect(): void {
    this.io.on('connect', (socket: Socket) => {
      console.log('New Connection: ', socket.id);
      /**
       * Trying to emmit an event to
       * everybody connect.
       * But it's not working with angular
       */
      socket.broadcast.emit('new-user', 'MATEUS');
      new MessageEvent(socket);
    })
  }
}
