import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connect, set } from 'mongoose';
import LOGGER from 'morgan';
import routes from './routes';

class Server {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.database();
    this.middleware();
    this.routes();
  }

  private async database(): Promise<void> {
    try {
      // @ts-ignore
      await connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        dbName: process.env.DB_NAME,
      });
      set('debug', true);
      console.log('Successfully connect to the database');
    } catch (e) {
      console.log('Unable to connect to the database');
      console.trace(e);
    }
  }

  private middleware(): void {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(LOGGER('dev'))
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new Server().express;
