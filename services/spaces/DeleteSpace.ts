import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DeleteItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

export async function deleteSpace(
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  // Get single space
  if (event.queryStringParameters && "id" in event.queryStringParameters) {
    const spaceId = event.queryStringParameters["id"];

    await ddbClient.send(
      new DeleteItemCommand({
        TableName: process.env.TABLE_NAME,
        Key: {
          "id": { S: spaceId as string },
        },
      })
    );

    return {
      statusCode: 20,
      body: JSON.stringify(`Deleted space with id ${spaceId}`),
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify("Please provide correct args!"),
  };
}
