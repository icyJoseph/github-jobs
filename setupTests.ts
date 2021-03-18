import "@testing-library/jest-dom/extend-expect";
import { setupServer } from "msw/node";

import { handlers } from "./src/mocks/handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
