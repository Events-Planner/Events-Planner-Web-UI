import React from 'react';

function App() {
  // Read VITE_ variables directly via import.meta.env
  const adminUrl = import.meta.env.ADMIN_UI_URL || process.env.admin_ui_url;
  const apiUrl = import.meta.env.VITE_API_URL;
  const test = process.env.test_number;
  return (
    <div style={{ padding: '20px' }}>
      <h1>Events Planner</h1>
      <p><strong>Admin URL:</strong> {adminUrl || 'Not set'}</p>
      <p><strong>API URL:</strong> {apiUrl || 'Not set'}</p>
      <p><strong>API URL:</strong> {test || 'Not set'}</p>
    </div>
  );
}

export default App;