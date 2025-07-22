import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', background: '#f8e1e7', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Reverie Jewelry. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
