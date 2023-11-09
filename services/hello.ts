import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";

import { v4 as uuid } from "uuid";

const s3Client = new S3Client({});

async function handler(event: APIGatewayProxyEvent, context: Context) {
  const command = new ListBucketsCommand({});
  const listBucketsResult = (await s3Client.send(command)).Buckets;

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(
      `Hello from ts lambda, here is your buckets: ` +
        JSON.stringify(listBucketsResult)
    ),
  };
  console.log(event);
  return response;
}

export { handler };
