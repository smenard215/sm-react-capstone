import React from "react";
import {Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  
    return(
        <div className="comfirm center">
            <div>
            <h1>Your <strong>reservation</strong> has been <span>confirmed</span>. We look forward to serving you soon!</h1>
            <h3>Please check your email for confirmation details.</h3>
            <Link to="/">
            <button aria-label="On Click">Back to Home</button>
          </Link>
            </div>
        </div>

    )
}

export default ConfirmedBooking;