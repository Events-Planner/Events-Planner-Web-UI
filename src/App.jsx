import React from 'react';

function App() {
  const adminUrl = process.env.admin_ui_url;
  const apiUrl = import.meta.env.VITE_API_URL;

  console.log('Admin UI URL:', adminUrl);
  console.log('API Base URL:', apiUrl);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Events Planner</h1>
      <p><strong>Admin URL:</strong> {adminUrl || 'Not set'}</p>
      <p><strong>API URL:</strong> {apiUrl || 'Not set'}</p>
    </div>
  );
}

export default App;