import * as cdk from 'aws-cdk-lib';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class GolfappbackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const apiHandler = new nodejs.NodejsFunction(this, 'api', {
      entry: '../app/src/lambda.ts',
      handler: 'index.lambda',
      depsLockFilePath: '../app/yarn.lock'
    })
    // example resource
    // const queue = new sqs.Queue(this, 'GolfappbackendQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
