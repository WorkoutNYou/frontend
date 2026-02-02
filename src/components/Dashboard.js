import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
/*
  id
  name - each single set
  desc
  meta: {distance, time, tags[]}
  structure: {
  rounds: [
  {
    "repeat": 0,
    "interval": "",
    "segments": [
      {
        id: 0,
        "name": "",
        "distance": 0,
        "pooltype":"SCY/SCM/LCM", 
        "notes": "",
        "effort": ""
      },
      {
        id: 0,
        "name": "",
        "distance": 0,
        "pooltype":"SCY/SCM/LCM", 
        "notes": "",
        "effort": "" - en1 en2 en3 sp1 sp2 sp3 sp500.
        "WorkoutNotes:"
      },
    ]
  }
]
*/ 
/*
const workouts = [
  {
    id: 0,
    name: "",          // Name of the set
    desc: "",          // Optional description
    meta: {
      distance: "",    // "x1000", "1500", etc.
      time: "",        // "~26 min", "x16.5//19 min"
      tags: []         // ["stroke", "aerobic", "IM"]
    },
    structure: {
      rounds: [
        {
          repeat: 0,        // Number of times this round repeats
          interval: "",     // "3:15/3:30//3:45"
          segments: [
            {
              id: 0,
              name: "",     // "200 smooth", "50 fast", etc.
              distance: 0,  // numeric distance
              pooltype: "SCY", // SCY | SCM | LCM
              notes: "",    // technique notes
              effort: "",   // en1 | en2 | en3 | sp1 | sp2 | sp3 | sp500
              workoutNotes: "" // optional additional notes
            }
          ]
        }
      ]
    }
  }
];
*/

const workouts = [
  {
    id: 0,
    name: "Sprint Workout",
    desc: "123132",
    meta: {
      distance: "",
      time: "",
      pooltype: "SCY",
      tags: []
    },
  },
  {
    id: 2,
    name: "Distance Workout",
    desc: "123132",
    meta: {
      distance: "",
      time: "",
      pooltype: "SCY",
      tags: ["stroke", "aerobic", "IM"]
    },
  }
];


  const [selectedWorkout, setSelectedWorkout] = useState(null);

  return (
    <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-content">
          <div className="workout-selection">
            <div className="workout-header">
              <h2 className="workout-selection-title">Select Workout</h2>
              <button className="panel-button">Create New Workout</button>
            </div>
            <div className="workout-list">
              {workouts.map((workout) => (
                <div 
                  key={workout.id} 
                  className={`workout-item ${selectedWorkout?.id === workout.id ? 'active' : ''}`}
                  onClick={() => setSelectedWorkout(workout)}
                  style={{ cursor: 'pointer' }}
                >
                  <h3 className="workout-name">{workout.name || "Unnamed Workout"}</h3>
                  <p className="workout-desc">{workout.desc || "No description available."}</p>
                  <div className="workout-meta">
                    <span className="workout-distance">Distance: {workout.meta.distance || "N/A"}</span>
                    <span className="workout-time">Time: {workout.meta.time || "N/A"}</span>
                  </div>
                  <div className="workout-tags-row">
                    <span className="workout-tags">{workout.meta.tags?.join(', ') || "No tags"}</span>
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
