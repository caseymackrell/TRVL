import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import axios from "axios";


    function TripConfirmation() {
    const id = useSelector(state => state.id);
    const[trip, setTrip] = useState({})
    const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  async function fetchData() {
    try {
      setIsLoading(true);
      const getResponse = await axios.get(`http://localhost:3000/trip/${id}`);
      setTrip(getResponse.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
}, [id]);


   return (

        <div className='mainFormContainer'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <div className='formContainer'>
                <h1 className='bookHeader'> Your Trip Confirmation </h1>
        
        <div className="answerContainer">
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            First Name: {trip.firstName}
            </div>
        </label>
        </div>
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            Last Name: {trip.lastName}
            </div>
        </label>
        </div>
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            Location: {trip.location}
            </div>
        </label>
        </div>
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            Date Range: {trip.startDate} - {trip.endDate}
            </div>
        </label>
        
        </div>
        </div>
        </div>
    </div>
  );
};

export default TripConfirmation;