// lambda.js
import * as serverlessExpress from '@vendia/serverless-express'
import { app } from './app.js'

export const handler = serverlessExpress.configure({ app })