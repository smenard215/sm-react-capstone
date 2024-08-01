import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  // Destructure props to get availableTimes and submitForm
  const { availableTimes, submitForm } = props;

  return (
    <BookingForm 
      availableTimes={availableTimes} 
      submitForm={submitForm} // Pass submitForm directly
    />
  );
};

export default Booking;
