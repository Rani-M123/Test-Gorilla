import React from 'react';

const Header = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="test.png" alt="Company Logo" style={{ marginRight: '20px', height: '40px' }} />
        <a href="/link1" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Product tour</a>
        <a href="/link2" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Science</a>
        <a href="/link3" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Test Library</a>
        <a href="/link4" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Pricing</a>
        <a href="/link4" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Learning</a>
      </div>
      

      <div>
        <button style={{
          margin: '0 10px',
          padding: '10px',
          backgroundColor: 'white',
          color: '#44AA97',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Demo</button>
        <button style={{
          margin: '0 10px',
          padding: '10px',
          backgroundColor: '#44AA97',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Try for free!</button>
      </div>
      
      
      </div>
      
  );
};

export default Header;
