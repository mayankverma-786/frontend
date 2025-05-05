import React, { useState } from 'react';
import axios from 'axios';

const ReportIssue = ({ token }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        location: '',
        images: [],
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/issues', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert(response.data.message);
        } catch (err) {
            console.error(err);
            alert('Issue reporting failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
            <textarea name="description" placeholder="Description" onChange={handleChange} required />
            <select name="category" onChange={handleChange} required>
                <option value="">Select Category</option>
                <option value="road">Road</option>
                <option value="sanitation">Sanitation</option>
                <option value="lighting">Lighting</option>
            </select>
            <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
            <button type="submit">Report Issue</button>
        </form>
    );
};

export default ReportIssue;