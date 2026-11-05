// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaHome, FaArrowLeft, FaQuestionCircle } from 'react-icons/fa';
// import soundEffects from '../utils/soundEffects';
// import './NotFound.css';

// const NotFound = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     soundEffects.playPageTransition();
//     soundEffects.playError();
//   }, []);

//   return (
//     <div className="not-found-container">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="not-found-content"
//       >
//         <div className="not-found-icon">
//           <FaQuestionCircle />
//         </div>
        
//         <h1 className="not-found-title">404</h1>
//         <h2 className="not-found-subtitle">Page Not Found</h2>
        
//         <p className="not-found-description">
//           Sorry, the page you're looking for doesn't exist or has been moved.
//         </p>
        
//         <div className="not-found-actions">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={(e) => {
//               soundEffects.playClick();
//               createRipple(e);
//               navigate(-1);
//             }}
//             onMouseEnter={(e) => {
//               soundEffects.playHover();
//               createGlow(e.currentTarget, '#6b7280', 300);
//             }}
//             className="not-found-btn secondary"
//           >
//             <FaArrowLeft />
//             Go Back
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={(e) => {
//               soundEffects.playClick();
//               createRipple(e);
//               navigate('/');
//             }}
//             onMouseEnter={(e) => {
//               soundEffects.playHover();
//               createGlow(e.currentTarget, '#3b82f6', 300);
//             }}
//             className="not-found-btn primary"
//           >
//             <FaHome />
//             Go Home
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

import React from 'react';
import './NotFound.css';

const NotFound = () => (
  <div className="not-found-container">
    <div className="not-found-content">
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  </div>
);

export default NotFound;

