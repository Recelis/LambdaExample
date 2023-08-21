import express, { Application, Request, Response } from 'express';
const dotenv = require('dotenv');

const app: Application = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Successful response.');
});

app.listen(port || 8000, () => console.log('App is listening on port 8000.'));