'use strict'
import express, { type Application, type Request, type Response } from 'express';
import 'dotenv/config'

const app: Application = express();


app.get('/', (_req: Request, res: Response) => {
  res.send('Successful response.');
});

export { app }