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
  } as any,
  {} as any
);
