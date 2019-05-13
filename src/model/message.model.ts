import { Base } from './base.model';
import { Document } from 'mongoose';

export interface Message extends Document, Base {
  message?: string;
  user?: string;
}
