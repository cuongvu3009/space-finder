import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

import { v4 } from "uuid";

export async function postSpaces(
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  const randomId = v4();
  const item = JSON.parse(event.body as string);

  const result = await ddbClient.send(
    new PutItemCommand({
      TableName: process.env.TABLE_NAME, // get from LamdbaStack
      Item: {
        id: {
          S: randomId,
        },
        location: {
          S: item.location,
        },
      },
    })
  );

  console.log(result);
  return {
    statusCode: 201,
    body: JSON.stringify({ id: randomId }),
  };
}