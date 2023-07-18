export default function BookingForm(props) {
  const { availableTime, onTimeUpdate } = props;

  return (
    <form>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={availableTime} onChange={onTimeUpdate}>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />

      <label htmlFor="occasion">Occasion</label>
      <select id="occassion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Make your reservation</button>
    </form>
  )
}