import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './components/AuthContext';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
  <AuthProvider>
    <Router>
      <Container className="mt-5">
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/register" replace />} />
      </Routes>
</Container>
  </Router>
  </AuthProvider>
);
}
export default App;