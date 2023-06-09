import React from 'react';
import profileImage from '../assets/Headshot.JPG';
import { Box, Typography } from '@mui/material';
import '../styles/Profile.css';

const Profile = () => {
  return (
    <Box className="profile-container">
        <img src={profileImage} alt="Profile" className="profile-image"/>
      <Box>
        <Typography variant="h3" className="profile-text">
          Dustyn Bruns
        </Typography>
        <Typography className="profile-text">
          Full-Stack Web Developer
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;