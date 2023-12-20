
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;

  let footerClassName = 'horizontal'; 


  if (pathname === '/about') {
    footerClassName = 'vertical';
  } else if (pathname === '/projects') {
    footerClassName = 'vertical';
  } else if (pathname === '/contact') {
    footerClassName = 'middle';
  }

  return (
    <footer className={footerClassName}>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-instagram fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
      <div className="copyright">© Copyright 2023</div>
    </footer>
  );
};

export default Footer;