import React from 'react';

function EventCard({ title, description }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default EventCard;
