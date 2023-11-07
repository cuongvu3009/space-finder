import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

import { v4 as uuid } from "uuid";

async function handler(event: APIGatewayProxyEvent, context: Context) {
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(`Hello from ts lambda ` + uuid()),
  };
  console.log(event);
  return response;
}

export { handler };
