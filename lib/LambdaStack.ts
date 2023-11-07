import * as cdk from "aws-cdk-lib";

import {
  Code,
  Function as LambdaFunction,
  Runtime,
} from "aws-cdk-lib/aws-lambda";

import { Construct } from "constructs";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { join } from "path";

export class LambdaStack extends cdk.Stack {
  public readonly helloLambdataIntegration: LambdaIntegration;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloLambda = new LambdaFunction(this, "HelloLambda", {
      runtime: Runtime.NODEJS_18_X,
      handler: "hello.main",
      code: Code.fromAsset(join(__dirname, "..", "services")),
    });

    this.helloLambdataIntegration = new LambdaIntegration(helloLambda);
  }
}
