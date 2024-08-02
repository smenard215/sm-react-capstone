import React, { useReducer, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "../Components/Booking";
import ConfirmedBooking from "../Components/ConfirmedBooking";
import Header from "../Components/Header";

// Helper functions
const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = s * a % m) / m;
};

const fetchAPI = (date) => {
    const result = [];
    const random = seededRandom(date.getDate());

    for (let i = 12; i <= 24; i++) {
        const hour = i % 12 || 12;
        const period = i < 12 || i >= 24 ? 'AM' : 'PM';

        if (random() < 0.5) {
            result.push(`${hour.toString().padStart(2, '0')}:00 ${period}`);
        }
        if (random() < 0.5) {
            result.push(`${hour.toString().padStart(2, '0')}:30 ${period}`);
        }
    }

    return result;
};

// Reducer function
const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_DATE':
            return { availableTimes: fetchAPI(new Date(action.date)) };
        default:
            return state;
    }
};

const Main = (props) => {
    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();

    const submitAPI = (formData) => {
        console.log("Form submitted:", formData);
        return true;
    };

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed", {state: formData });
        }
    };

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
