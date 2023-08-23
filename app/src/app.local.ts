import app from './app.js'
import * as dotenv from 'dotenv'
const port = process.env.PORT;
app.listen(port || 8000, () => console.log('App is listening on port 8000.'));