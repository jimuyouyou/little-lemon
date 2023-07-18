import BookingForm from "./BookingForm";

export default function BookingPage(props) {
  const { availableTime, onTimeUpdate } = props;

  return <>
    This is the BookingPage
    <BookingForm availableTime={availableTime} onTimeUpdate={onTimeUpdate} />
  </>;
}