import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: '',
    role: '',
    opportunities: [],
    applications: [],
  });

  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    password: '',
  });

  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch user profile data
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setUser(data);
        setFormData({ name: data.name, bio: data.bio, password: '' });
        setLoading(false);
      } catch (err) {
        setErrorMessage('Error fetching profile data');
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h2>{user.role === 'volunteer' ? 'Your Applications' : 'Your Opportunities'}</h2>
      
      {user.role === 'volunteer' ? (
        <ul>
          {user.applications.length > 0 ? (
            user.applications.map((application) => (
              <li key={application._id}>
                {application.opportunityTitle} - Status: {application.status}
                <Link to={`/opportunity/${application.opportunityId}`}>
                  <button>View Opportunity</button>
                </Link>
              </li>
            ))
          ) : (
            <p>You haven't applied for any opportunities yet.</p>
          )}
        </ul>
      ) : (
        <ul>
          {user.opportunities.length > 0 ? (
            user.opportunities.map((opportunity) => (
              <li key={opportunity._id}>
                {opportunity.title} - {opportunity.location}
                <Link to={`/opportunity/${opportunity._id}`}>
                  <button>View Opportunity</button>
                </Link>
              </li>
            ))
          ) : (
            <p>You haven't signed up for any opportunities yet.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Profile;

