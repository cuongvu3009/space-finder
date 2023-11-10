import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

export async function updateSpace(
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  // Get single space
  if (
    event.queryStringParameters &&
    "id" in event.queryStringParameters &&
    event.body
  ) {
    const parsedBody = JSON.parse(event.body);
    const spaceId = event.queryStringParameters["id"];
    const requestBodyKey = Object.keys(parsedBody)[0];
    const requestBodyValue = parsedBody[requestBodyKey];

    const updateResult = await ddbClient.send(
      new UpdateItemCommand({
        TableName: process.env.TABLE_NAME,
        Key: {
          "id": { S: spaceId as string },
        },
        UpdateExpression: "set #zzzNew = :new",
        ExpressionAttributeValues: {
          ":new": {
            S: requestBodyValue,
          },
        },
        ExpressionAttributeNames: {
          "#zzzNew": requestBodyKey,
        },
        ReturnValues: "UPDATED_NEW",
      })
    );

    return {
      statusCode: 204,
      body: JSON.stringify(updateResult.Attributes),
    };
  }

  return {
    statusCode: 204,
    body: JSON.stringify("Please provide correct args!"),
  };
}
