import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  const { availableTimes, submitForm } = props;

  return (
    <BookingForm 
      availableTimes={availableTimes} 
      submitForm={submitForm} 
    />
  );
};

export default Booking;
