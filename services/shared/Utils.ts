import { Fn, Stack } from "aws-cdk-lib";

import { JsonError } from "./Validator";
import { v4 } from "uuid";

export function parseJSON(arg: string) {
  try {
    return JSON.parse(arg);
  } catch (error: any) {
    throw new JsonError(error.message);
  }
}

export function createRandomId() {
  return v4();
}

export function getSuffixFromStack(stack: Stack) {
  const shortStackId = Fn.select(2, Fn.split("/", stack.stackId));
  const suffix = Fn.select(4, Fn.split("-", shortStackId));
  return suffix;
}
