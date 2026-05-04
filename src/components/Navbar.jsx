import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/" className="nav-logo">Elyx</Link>
      <ul className="nav-links">
        <li><a href="/#intro">Collection</a></li>
        <li><a href="/#specs">Specs</a></li>
        <li><a href="/#reviews">Reviews</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
      <a
        href="https://eylx.godaddysites.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
      >
        Shop Now
      </a>
    </nav>
  );
}
