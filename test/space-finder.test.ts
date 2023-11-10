import { handler } from "../services/spaces/handler";

process.env.AWS_REGION = "eu-north-1";
process.env.TABLE_NAME = "SpaceStack-062bf889427a";

handler(
  {
    // Post 1 space
    // httpMethod: "POST",
    // body: JSON.stringify({
    //   location: "Dublin",
    // }),

    // Get 1 space
    // httpMethod: "GET",
    // queryStringParameters: {
    //   id: "22b9d838-0393-4ebf-a74f-02a92e05a3ab",
    // },

    // Update 1 space
    httpMethod: "PUT",
    queryStringParameters: {
      id: "22b9d838-0393-4ebf-a74f-02a92e05a3ab",
    },
    body: JSON.stringify({
      location: "Kerava",
    }),
  } as any,
  {} as any
);
