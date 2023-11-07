#!/usr/bin/env node

import "source-map-support/register";

import * as cdk from "aws-cdk-lib";

import { DataStack } from "../lib/DataStack";

const app = new cdk.App();
new DataStack(app, "DataStack");
