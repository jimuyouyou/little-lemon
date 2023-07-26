import { render, screen } from "@testing-library/react";
import HomePage from "./components/HomePage";

test("renders learn react link", () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/traditional recipes/i);
  expect(linkElement).toBeInTheDocument();
});
