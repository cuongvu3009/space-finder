import { handler } from "../services/spaces/handler";

process.env.AWS_REGION = "eu-north-1";
process.env.TABLE_NAME = "SpaceStack-062bf889427a";

handler(
  {
    // httpMethod: "POST",
    // body: JSON.stringify({
    //   location: "Dublin",
    // }),

    httpMethod: "GET",
    queryStringParameters: {
      id: "22b9d838-0393-4ebf-a74f-02a92e05a3ab",
    },
  } as any,
  {} as any
);
