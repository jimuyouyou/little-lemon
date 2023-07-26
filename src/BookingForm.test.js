import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BookingForm from "./components/sections/reservePages/BookingForm";

test("First Name", () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<BookingForm availableTimes={['17:00', '18:00', '19:00', '20:00']} />} />
      </Routes>
    </MemoryRouter>,
  );

  const linkElement = screen.getByText(/First Name/i);
  expect(linkElement).toBeInTheDocument();
});
