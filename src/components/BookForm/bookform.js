import React, {useState} from 'react'
import './bookform.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function BookForm() {
  
  const navigate = useNavigate()
  const id = useSelector(state => state.id);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  

const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
        firstName: '',
        lastName: '',
        location: '',
        startDate: '',
        endDate: ''})

    try {
        const postResponse = await axios.post('http://localhost:3000/trip', formData);
        console.log(postResponse);
        
        const { data: { _id: id } } = postResponse;
        const _id = postResponse.data._id
        console.log(_id)
        console.log(postResponse)
        dispatch({type: 'SET_ID', id: _id})

        const getResponse = await axios.get(`http://localhost:3000/trip/${id}`);
        console.log(getResponse);
        navigate('/trip')
    } catch (error) {
        console.error(error);
    }
};

    const locationOptions = [
    { value: '', label: '-- Please select a location --' },
    { value: 'Amazon', label: 'Amazon' },
    { value: 'Egypt', label: 'Egypt' },
    { value: 'Australia', label: 'Australia' },
    { value: 'London', label: 'London' },
    { value: 'Private Island', label: 'Private Island' },
    { value: 'Yacht Adventure', label: 'Yacht Adventure' },
    { value: 'Bahamas', label: 'Bahamas' },
    { value: 'Nepal', label: 'Nepal' }
  ];

  return (

        <div className='mainFormContainer'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <div className='formContainer'>
                <h1 className='bookHeader'>Book a Trip!</h1>
        <form onSubmit={handleSubmit}> 
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            First Name:
            </div>
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            />
        </label>
        </div>
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            Last Name:
            </div>
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            />
        </label>
        </div>
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            Location:
            </div>
            <select className='selectClass' name="location" value={formData.location} onChange={handleChange}>
            {locationOptions.map(({ value, label }) => (
                <option key={value} value={value}>
                {label}
                </option>
            ))}
            </select>
        </label>
        </div>
        <div className='formAnswers'>
        <label>
            <div className='formHeading'>
            Date Range:
            </div>
            <div className='dateRange'>
            <div className='date'>
            <input
            className='startDate'
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            />
            </div>
            <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            />
            </div>
        </label>
        </div>
        <div className='button'>
        <button className='submitButton' type="submit">Submit</button>
        </div>
        </form>
        </div>
    </div>
  );
};


export default BookForm