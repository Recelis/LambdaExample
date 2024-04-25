// lambda.js
import * as serverlessExpress from "@codegenie/serverless-express";
import app from "./api";
exports.handler = serverlessExpress.configure({ app });
