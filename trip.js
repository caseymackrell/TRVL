import React, { useState, useEffect } from "react";

const TripConfirmation = (props) => {
    
    useEffect(() => {
    setTrip(props.trip);
    setIsLoading(props.isLoading);
}, [props.trip, props.isLoading]); 
    
const [trip, setTrip] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>Trip Details</h1>
                    <div>
                        <div>
                            <label>First Name:</label>
                            <span>{trip.firstName}</span>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <span>{trip.lastName}</span>
                        </div>
                        <div>
                            <label>Location:</label>
                            <span>{trip.location}</span>
                        </div>
                        <div>
                            <label>Start Date:</label>
                            <span>{trip.startDate}</span>
                        </div>
                        <div>
                            <label>End Date:</label>
                            <span>{trip.endDate}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TripConfirmation;