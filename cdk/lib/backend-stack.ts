import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // const apiHandler = new lambda.Function(this, 'api', {
    //   entry: '../app/src/lambda.ts',
    //   handler: 'index.handler',
    //   depsLockFilePath: '../app/yarn.lock'
    // })

    const expressLambda = new lambda.Function(this, 'ExpressLambda', {
      functionName: 'backend',
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'lambda.handler',
      code: lambda.Code.fromAsset('../app'),
    });

    // Create an API Gateway
    const api = new apigateway.RestApi(this, 'ExpressApi');

    // Create an integration using aws-serverless-express
    const integration = new apigateway.LambdaIntegration(expressLambda, {
        proxy: true,
    });

    api.root.addMethod("GET", integration)
  }
}
