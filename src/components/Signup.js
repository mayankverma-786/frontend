import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user', // Default role is 'user'
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const response = await axios.post('http://localhost:8080/auth/signup', formData);
            setSuccess('Signup successful! You can now log in.');
        } catch (err) {
            console.error(err);
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleSubmit} className="w-50 p-4 border rounded shadow">
                <h2 className="text-center mb-4">Signup</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Register as</label>
                    <select
                        name="role"
                        id="role"
                        onChange={handleChange}
                        value={formData.role}
                        className="form-select"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success w-100">Signup</button>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;