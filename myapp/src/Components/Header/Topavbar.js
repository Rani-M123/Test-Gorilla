import React from 'react';

const NavBar = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'rgb(227, 223, 223)',
      padding: '10px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
    }}>
      <select name="languages" id="languages" style={{ fontSize: '16px' }}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        // Add more languages as needed
      </select>

      <div>
        <a href="/link1" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>For Candiates</a>
        <a href="/link2" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Help</a>
        <a href="/link3" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Log In</a>
      </div>
    </div>
  );
};

export default NavBar;
