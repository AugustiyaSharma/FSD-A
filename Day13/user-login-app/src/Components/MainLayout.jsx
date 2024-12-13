import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div style={{
      fontFamily: '"Arial", sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(120deg, #a18cd1 0%, #fbc2eb 100%)', // Soft purple-pink gradient
      color: '#333333',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <nav style={{
        padding: '10px 20px',
        background: '#0d47a1', // Rich blue for navigation
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '20px',
          margin: 0,
          padding: 0,
          justifyContent: 'center',
        }}>
          <li style={{ fontSize: '16px' }}>
            <Link to="./login" style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontWeight: 'bold',
              padding: '8px 12px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1976d2'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Login
            </Link>
          </li>
          <li style={{ fontSize: '16px' }}>
            <Link to="./register" style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontWeight: 'bold',
              padding: '8px 12px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1976d2'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{
        padding: '20px',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8', // Light grayish-blue for a professional look
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
