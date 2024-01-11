import { HttpProblems, ZuploContext, ZuploRequest } from "@zuplo/runtime";

const lookup = {
  "A": "https://www.example.com",
  "B": "https://echo.zuplo.io"
}

export default async function (request: ZuploRequest, context: ZuploContext) {
  
  const route = request.query.route;

  if (!route)
  {
    return HttpProblems.badRequest(request, context);
  }

  const url = lookup[route];

  return fetch(url);
}
