import React, {useState} from 'react'
import './bookform.css'

function BookForm() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // send it to API
  };

    const locationOptions = [
    { value: '', label: '-- Please select a location --' },
    { value: 'Amazon', label: 'Amazon' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Houston', label: 'Houston' },
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