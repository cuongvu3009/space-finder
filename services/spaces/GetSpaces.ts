import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

export async function getSpaces(
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
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
