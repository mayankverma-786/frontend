import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/issues', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setReports(response.data);
            } catch (err) {
                console.error('Error fetching reports:', err);
            }
        };

        fetchReports();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
            <p>Here are your submitted reports:</p>
            <ul>
                {reports.map((report) => (
                    <li key={report._id} className="border p-4 mb-2 rounded">
                        <h3 className="font-bold">{report.title}</h3>
                        <p>{report.description}</p>
                        <p>Status: {report.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;