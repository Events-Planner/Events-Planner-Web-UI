import React, { useEffect, useState } from 'react';
import { getEvents } from './services/eventService';

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Vite only reads client-side variables prefixed with VITE_
  const apiUrl = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || 'Not set';

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching events:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Events Planner</h1>
      <p><strong>Configured API URL:</strong> {apiUrl}</p>
      
      <hr />

      <h2>Events List</h2>
      {loading && <p>Loading events from backend...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && events.length === 0 && (
        <p>No events available in the database.</p>
      )}

      <ul>
        {events.map((event) => (
          <li key={event.id || event.name} style={{ marginBottom: '8px' }}>
            <strong>{event.name || event.title}</strong> - {event.date || event.eventDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;