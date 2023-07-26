import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("BookingForm", () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/Choose time/i);
  expect(linkElement).toBeInTheDocument();
});
