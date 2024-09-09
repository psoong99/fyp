import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-nav">
        <ul>
          <li>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
          </li>
          <li>
            <Link to="/opportunities">
              <button>View Opportunities</button>
            </Link>
          </li>
          <li>
            <Link to="/applications">
              <button>Your Applications</button>
            </Link>
          </li>
          <li>
            <Link to="/post-opportunity">
              <button>Post an Opportunity</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
