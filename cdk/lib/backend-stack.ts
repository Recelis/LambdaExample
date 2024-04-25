import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const expressLambda = new lambda.Function(this, "ExpressLambda", {
      functionName: "backend",
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "build/lambda.handler", // always look for the build directory
      code: lambda.Code.fromAsset("../api"), // look for the root api directory
    });

    // Create an API Gateway
    const api = new apigateway.RestApi(this, "ExpressApi");

    // Create an integration using aws-serverless-express
    const integration = new apigateway.LambdaIntegration(expressLambda, {
      proxy: true,
    });

    api.root.addMethod("ANY", integration);
  }
}
