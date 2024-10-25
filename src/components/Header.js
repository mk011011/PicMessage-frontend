// 공통 헤더 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // 로고 이미지 경로

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <span style={styles.brand}>최고다우</span>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/updates" style={styles.navLink}>Updates</Link>
        <Link to="/services" style={styles.navLink}>Services</Link>
        <Link to="/features" style={styles.navLink}>Features</Link>
        <Link to="/about" style={styles.navLink}>About Us</Link>
      </nav>
      <div style={styles.rightSection}>
        <button style={styles.signupButton}>Sign Up</button>
        <button style={styles.loginButton}>Log In</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    borderBottom: '1px solid #ccc',
    backgroundColor: 'white',
    zIndex: 1000,
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  brand: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  navLink: {
    margin: '0 15px',
    fontSize: '16px',
    textDecoration: 'none',
    color: 'black',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#ffffff',
    color: '#007bff',
    border: '2px solid #007bff',
    borderRadius: '5px',
    padding: '5px 15px',
    marginRight: '10px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  loginButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 15px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Header;
