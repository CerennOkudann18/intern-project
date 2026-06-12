import React from 'react';

function NavBar({ darkMode, setDarkMode }) {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: darkMode ? '#000000' : '#ffffff',
    borderBottom: darkMode ? '1px solid #d77070' : '1px solid #eee',
    transition: 'all 0.3s ease'
  };

  const logoStyle = {
    color: darkMode ? '#60e7fc' : '#0d83f9',
    fontWeight: 'bold',
    fontSize: '20px'
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: darkMode ? '#faf8f5' : '#242424',
    textDecoration: 'none',
    fontWeight: '500',
    cursor: 'pointer'
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Ceren's Workspace</div>
      <ul style={linkContainerStyle}>
        <li><span style={linkStyle}>Home</span></li>
        <li><span style={linkStyle}>About</span></li>
        <li><span style={linkStyle}>Coffee</span></li>
      </ul>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          backgroundColor: darkMode ? '#fff' : '#333',
          color: darkMode ? '#0055ff' : '#fff',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {darkMode ? '☀️ Light' : '🌙 Night'}
      </button>
    </nav>
  );
}

export default NavBar;