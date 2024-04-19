// lambda.js
const serverlessExpress = require("@codegenie/serverless-express");
import app from "./app.js";
exports.handler = serverlessExpress({ app });
