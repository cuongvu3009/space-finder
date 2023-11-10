import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { createRandomId, parseJSON } from "../shared/Utils";

import { marshall } from "@aws-sdk/util-dynamodb";
import { validateAsSpaceEntry } from "../shared/Validator";

export async function postSpaces(
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  const randomId = createRandomId();
  const item = parseJSON(event.body as string);
  item.id = randomId;
  validateAsSpaceEntry(item);

  const result = await ddbClient.send(
    new PutItemCommand({
      TableName: process.env.TABLE_NAME, // get from LamdbaStack
      Item: marshall(item),
    })
  );

  console.log(result);
  return {
    statusCode: 201,
    body: JSON.stringify({ id: randomId }),
  };
}
