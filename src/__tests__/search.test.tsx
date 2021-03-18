import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { App } from "~/ui/App";

describe("Search", () => {
  it("Renders results for `node`", async () => {
    render(<App />);
    expect(await screen.findByText("GitHub Jobs")).toBeInTheDocument();

    const input = screen.getByTestId("search-input");

    fireEvent.change(input, { target: { value: "node" } });

    const btn = screen.getByText("Search");

    act(() => {
      fireEvent.click(btn);
    });

    const title0 = await waitFor(() => screen.findAllByText("title 0"));
    expect(title0.length).toBeGreaterThan(0);
    const title1 = await waitFor(() => screen.findAllByText("title 1"));
    expect(title1.length).toBeGreaterThan(0);
  });
});
