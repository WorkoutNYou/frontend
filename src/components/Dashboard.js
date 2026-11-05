import React, { useState, useEffect } from 'react';
import { fetchWorkouts } from '../api/workoutService';
import './Dashboard.css';

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadWorkouts();
  }, []);

  async function loadWorkouts() {
    try {
      setLoading(true);
      const data = await fetchWorkouts();
      setWorkouts(data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load workouts');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-content">
        <div className="workout-selection">
          <div className="workout-header">
            <h2 className="workout-selection-title">Select Workout</h2>
            <div className="workout-actions">
              <button className="panel-button" type="button" onClick={loadWorkouts}>
                Create Workout
              </button>
              <button className="panel-button" type="button" onClick={loadWorkouts}>
                Refresh Workouts
              </button>
            </div>
          </div>

          {loading && <p>Loading workouts...</p>}
          {error && <p className="error-message">{error}</p>}

          <div className="workout-list">
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className={`workout-item ${selectedWorkout?.id === workout.id ? 'active' : ''}`}
                onClick={() => setSelectedWorkout(workout)}
                style={{ cursor: 'pointer' }}
              >
                <h3 className="workout-name">{workout.name || 'Unnamed Workout'}</h3>
                <p className="workout-desc">{workout.desc || 'No description available.'}</p>
                <div className="workout-meta">
                  <span className="workout-distance">Distance: {workout.meta?.distance || 'N/A'}</span>
                  <span className="workout-time">Time: {workout.meta?.time || 'N/A'}</span>
                </div>
                <div className="workout-tags-row">
                  <span className="workout-tags">{workout.meta?.tags?.join(', ') || 'No tags'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
