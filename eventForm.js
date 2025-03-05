import React from 'react';
import AddEventForm from './AddEventForm'; // Adjust the path as necessary
import EventsCalendar from './EventsCalendar'; // Your existing calendar component
import './form.css';

const eventForm = () => {
  return (
    <div>
      <h1>Alumni Connect</h1>
      <AddEventForm />
      <EventsCalendar />
    </div>
  );
};

export default eventForm;
