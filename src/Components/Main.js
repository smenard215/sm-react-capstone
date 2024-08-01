import React, { useReducer, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Booking from "../Components/Booking";
import ConfirmedBooking from "../Components/ConfirmedBooking";
import Header from "../Components/Header";

const Main = () => {
    // Function to generate available times based on date
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 12; i <= 24; i++) {
            let hour = i % 12 || 12; // Convert to 12-hour format
            let period = i < 12 || i >= 24 ? 'AM' : 'PM'; // Determine AM/PM
        
            if (random() < 0.5) {
                result.push(hour.toString().padStart(2, '0') + ':00 ' + period);
            }
            if (random() < 0.5) {
                result.push(hour.toString().padStart(2, '0') + ':30 ' + period);
            }
        }
        
        return result;
    };

    // Seeded random number generator
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    };

    // Reducer to manage state updates
    function updateTimes(state, action) {
        switch (action.type) {
            case 'UPDATE_DATE':
                return { availableTimes: fetchAPI(new Date(action.date)) };
            default:
                return state;
        }
    }

    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();

    // Function to handle form submission
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    // Function to simulate form submission (dummy implementation)
    const submitAPI = function(formData) {
        console.log("Form submitted:", formData);
        return true;
    };

    // Handle date updates
    useEffect(() => {
        dispatch({ type: 'UPDATE_DATE', date: new Date() });
    }, []);

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route
                    path="/booking"
                    element={
                        <Booking
                            availableTimes={state.availableTimes}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;
