import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);



    const expressLambda = new lambda.Function(this, 'ExpressLambda', {
      functionName: 'backend',
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'lambda.handler', // cannot find a typescript file?
      code: lambda.Code.fromAsset('../app/build'),
    });

    // building errors using nodejs?
    // const expressLambda = new nodejs.NodejsFunction(this, 'ExpressLambda', {
    //   functionName: 'backend',
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   handler: 'lambda.handler',
    //   entry: '../app/build/lambda.js',
    //   depsLockFilePath: '../app/yarn.lock'
    // });

    // Create an API Gateway
    const api = new apigateway.RestApi(this, 'ExpressApi');

    // Create an integration using aws-serverless-express
    const integration = new apigateway.LambdaIntegration(expressLambda, {
        proxy: true,
    });

    api.root.addMethod("GET", integration)
  }
}
