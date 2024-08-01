import React from 'react';
import { Container, Typography, Button, CardMedia } from '@mui/material';
import image from '../Assets/img/heroimg.jpg';

const Header = () => {
  return (
    <Container maxWidth="lg">
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '50px'}}>
        {/* Left Section */}
        <div style={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            Little Lemon
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Chicago
          </Typography>
          <Typography variant="body1" paragraph>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </Typography>
          <Button variant="contained" color="primary">
            Reserve a Table
          </Button>
        </div>

        {/* Right Section */}
        <div style={{ flex: 1, paddingLeft: '30px' }}>
          <CardMedia
            component="img"
            alt="Hero Image"
            height="400"
            width="500"
            image={image}
          />
        </div>
      </div>
    </Container>
  );
};

export default Header;
