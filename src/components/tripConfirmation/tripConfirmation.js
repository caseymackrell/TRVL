import React, { useState, useEffect } from "react";

const TripConfirmation = (props) => {
    
    useEffect(() => {
    setTrip(props.trip);
    setIsLoading(props.isLoading);
}, [props.trip, props.isLoading]); 
    
const [trip, setTrip] = useState({});
    const [isLoading, setIsLoading] = useState(false);

   return (

        <div className='mainFormContainer'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <div className='formContainer'>
                <h1 className='bookHeader'>Trip Confirmation</h1>
        <div> 
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            First Name:
            </div>
        </label>
        </div>
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            Last Name:
            </div>
        </label>
        </div>
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            Location:
            </div>
        </label>
        </div>
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            Date Range:
            </div>
            <div className='dateRange'>
            <div className='date'>
            </div>
            </div>
        </label>
        </div>
        <div className='button'>
        <button className='submitButton' type="submit">Submit</button>
        </div>
        </div>
        </div>
    </div>
  );
};

export default TripConfirmation;