import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  DynamoDBClient,
  GetItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";

export async function getSpaces(
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  // Get single space
  if (event.queryStringParameters) {
    if ("id" in event.queryStringParameters) {
      const spaceId = event.queryStringParameters["id"];
      const getItemResponse = ddbClient.send(
        new GetItemCommand({
          TableName: process.env.TABLE_NAME,
          Key: {
            "id": { S: spaceId as string },
          },
        })
      );

      if ((await getItemResponse).Item) {
        return {
          statusCode: 200,
          body: JSON.stringify((await getItemResponse).Item),
        };
      } else {
        return {
          statusCode: 404,
          body: JSON.stringify(`Space with id ${spaceId} not found`),
        };
      }
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify("ID is required!"),
      };
    }
  }

  // Get all spaces
  const result = await ddbClient.send(
    new ScanCommand({
      TableName: process.env.TABLE_NAME, // get from LamdbaStack
    })
  );

  console.log(result.Items);
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
}
