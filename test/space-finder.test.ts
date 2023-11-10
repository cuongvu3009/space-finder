import { handler } from "../services/spaces/handler";

process.env.AWS_REGION = "eu-north-1";
process.env.TABLE_NAME = "SpaceStack-062bf889427a";

handler(
  {
    // Post 1 space
    httpMethod: "POST",
    body: JSON.stringify({
      location: "Dublin",
    }),
    // Get 1 space
    // httpMethod: "GET",
    // queryStringParameters: {
    //   id: "22b9d838-0393-4ebf-a74f-02a92e05a3ab",
    // },
    //  Get spaceS
    // httpMethod: "GET",

    // Update 1 space
    // httpMethod: "PUT",
    // queryStringParameters: {
    //   id: "22b9d838-0393-4ebf-a74f-02a92e05a3ab",
    // },
    // body: JSON.stringify({
    //   location: "Kerava",
    // }),
    // Delete 1 space
    // httpMethod: "DELETE",
    // queryStringParameters: {
    //   id: "e06cee8f-5d67-4d3d-a3a0-20ae66ac1455",
    // },
  } as any,
  {} as any
).then((result) => console.log(result));
