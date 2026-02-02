import React, { useEffect, useState, useRef } from 'react';
import './Dashboard.css';

const Dashboard = () => {

  return (
    <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-content">
          <div className="workout-selection">
            <h2 className="workout-selection-title">Select Workout</h2>
            <button className="panel-button">Create New Workout</button>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
