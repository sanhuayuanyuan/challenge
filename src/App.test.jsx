import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders button and updates count on click", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /count is 0/i });
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(button).toHaveTextContent("count is 1");
});
