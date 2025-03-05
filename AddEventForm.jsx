import React, { useState } from 'react';

const AddEventForm = () => {
  // State variables for event details
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  // Function to handle form submission
  const handleAddEvent = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const newEvent = {
      name: eventName,
      date: eventDate,
      description: eventDescription,
    };

    try {
      // Sending a POST request to the backend API
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      // Check if the response is OK (status code 200-299)
      if (response.ok) {
        const savedEvent = await response.json(); // Parse JSON response
        console.log('Event added:', savedEvent); // Log the saved event
        // Reset form fields after successful submission
        setEventName('');
        setEventDate('');
        setEventDescription('');
      } else {
        console.error('Error adding event:', response.statusText); // Log any errors
      }
    } catch (error) {
      console.error('Error adding event:', error); // Log network errors
    }
  };

  return (
    <form 
      onSubmit={handleAddEvent} 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>Add New Event</h2>
      <input 
        type="text" 
        placeholder="Event Name" 
        value={eventName} 
        onChange={(e) => setEventName(e.target.value)} 
        required 
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
        }}
      />
      <input 
        type="date" 
        value={eventDate} 
        onChange={(e) => setEventDate(e.target.value)} 
        required 
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
        }}
      />
      <textarea 
        placeholder="Description" 
        value={eventDescription} 
        onChange={(e) => setEventDescription(e.target.value)} 
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
        }}
      />
      <button 
        type="submit" 
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        Add Event
      </button>
    </form>
  );
};

export default AddEventForm;
