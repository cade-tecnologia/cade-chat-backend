import 'reflect-metadata';
import { config } from 'dotenv';

config();

import server from './server';
import { CreateSocket } from './socket/create-socket.main';

const port = process.env.PORT;

// @ts-ignore
const serverCreated = server.listen(8080, () => {
  console.log('\n----------------------');
  console.log(`SERVER RUNNING ON\nhttp://localhost:${ port }`);
  console.log('ENVIRONMENT --> ', process.env.NODE_ENV);
  console.log('----------------------\n');

});

/**
 * Creates a new Socket with
 * the server created by express
 */
new CreateSocket(serverCreated);
