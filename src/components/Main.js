import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import BookingPage from './BookingPage';

export default function Main() {
  const [availableTime, setAvailableTimes] = useState('17:00');
  const onTimeUpdate = (e) => {
    e.preventDefault();
    setAvailableTimes(e.target.value);
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTime={availableTime} onTimeUpdate={onTimeUpdate} />}></Route>
      </Routes>
    </main>
  )
}