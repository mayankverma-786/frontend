import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setToken={setToken} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;