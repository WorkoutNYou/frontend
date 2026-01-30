import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { FaHome, FaGraduationCap, FaQuestionCircle, FaChartLine, FaFire, FaTrophy, FaCoins, FaCheckCircle, FaSignOutAlt, FaUserShield, FaUser, FaComments, FaUsers } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {

  return (
    <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
