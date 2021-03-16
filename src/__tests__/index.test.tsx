import { render, screen } from "@testing-library/react";

const App = () => <div>Hi</div>;

describe("Test", () => {
  it("works", async () => {
    render(<App />);
    expect(await screen.findByText("Hi")).toBeInTheDocument();
  });
});
