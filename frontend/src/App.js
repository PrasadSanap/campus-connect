import React, { useEffect, useState } from 'react';
import EventCard from './components/EventCard';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error("Backend did not return an array:", data);
          setEvents([]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Campus Connect</h1>
      {events.map((event, index) => (
        <EventCard key={index} title={event.title} description={event.description} />
      ))}
    </div>
  );
}

export default App;
