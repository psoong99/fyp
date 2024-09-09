import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Opportunities.css'; 

const opportunitiesEx = [
  {
    id: 1,
    title: "Environmental Clean-Up",
    description: "Join us for a day of cleaning up the park and helping the environment.",
    location: "Central Park, New York",
    skillsRequired: ["Teamwork", "Physical Endurance"],
  },
  {
    id: 2,
    title: "Food Bank Volunteer",
    description: "Assist in packaging and distributing food to local families in need.",
    location: "Food Bank, Los Angeles",
    skillsRequired: ["Organization", "Customer Service"],
  },
  {
    id: 3,
    title: "Animal Shelter Helper",
    description: "Help us take care of animals at the local shelter, including feeding and cleaning.",
    location: "Animal Shelter, Chicago",
    skillsRequired: ["Animal Care", "Compassion"],
  },
  {
    id: 4,
    title: "Tutoring Underprivileged Kids",
    description: "Provide tutoring sessions for kids in subjects like math and reading.",
    location: "Community Center, Boston",
    skillsRequired: ["Tutoring", "Patience"],
  },
];

const OpportunityList = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    setOpportunities(opportunitiesEx);
  }, []);

  return (
    <div className="opportunity-container">
      <h2>Available Opportunities</h2>
      {opportunities.map((opportunity) => (
        <div key={opportunity.id} className="opportunity-item">
          <h3>{opportunity.title}</h3>
          <p className="opportunity-details">Location: {opportunity.location}</p>
          <p className="opportunity-details">Description:</p>
          <p>{opportunity.description}</p>
          <p className="opportunity-details">Required Skills:</p>
          <div className="skills-list">
            {opportunity.skillsRequired.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
          <button className="apply-button">Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default OpportunityList;
