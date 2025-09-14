import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders button and updates count", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is 0/i });
    expect(button).toBeInTheDocument();   // 初始按钮存在
    fireEvent.click(button);
    expect(screen.getByRole("button", { name: /count is 1/i })).toBeInTheDocument(); // 点击后更新
  });
});
