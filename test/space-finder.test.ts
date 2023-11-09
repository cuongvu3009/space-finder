import { handler } from "../services/spaces/handler";

handler(
  {
    httpMethod: "POST",
    body: JSON.stringify({
      location: "Esppoo",
    }),
  } as any,
  {} as any
);
