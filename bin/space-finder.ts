#!/usr/bin/env node

import "source-map-support/register";

import * as cdk from "aws-cdk-lib";

import { ApiStack } from "../lib/ApiStack";
import { DataStack } from "../lib/DataStack";
import { LambdaStack } from "../lib/LambdaStack";

const app = new cdk.App();

const dataStack = new DataStack(app, "DataStack");
const lambdaStack = new LambdaStack(app, "LambdaStack", {
  spacesTable: dataStack.spacesTable,
});
new ApiStack(app, "ApiStack", {
  helloLambdaIntegration: lambdaStack.helloLambdataIntegration,
});
