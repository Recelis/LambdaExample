// lambda.js
import * as serverlessExpress from "@codegenie/serverless-express";
import app from "./app";
exports.handler = serverlessExpress.configure({ app });
