import { rest } from "msw";
import { baseURL, Position } from "~/utils/jobs";

const nodePositions: Position[] = [
  {
    id: "0",
    title: "title 0",
    description: "job 0",
    type: "Full Time",
    company: "cia",
    company_logo: "logo",
    company_url: "url",
    created_at: "2021-01-01",
    url: "url",
    how_to_apply: "howto 0",
    location: "location"
  },
  {
    id: "1",
    title: "title 1",
    description: "job 1",
    type: "Full Time",
    company: "cia",
    company_logo: "logo",
    company_url: "url",
    created_at: "2021-01-01",
    url: "url",
    how_to_apply: "howto 1",
    location: "location"
  }
];

export const handlers = [
  rest.get(`${baseURL}/positions.json`, (req, res, ctx) => {
    // const payload = req.params.search ? nodePositions : [];
    // console.log(req.params);
    return res(ctx.status(200), ctx.json(nodePositions));
  })
];
