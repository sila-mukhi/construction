import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/LogIn');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h4 className="navbar-brand">
          ARYA <span>Construction</span>
        </h4>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`navbar-nav ${isMenuOpen ? 'show' : ''}`}>
          {auth ? (
            <>
              {/* Carousel Dropdown */}
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle">Carousel</div>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/add-carousel">
                    Add Carousel
                  </Link>
                  <Link className="dropdown-item" to="/list-carousel">
                    List Carousel
                  </Link>
                </div>
              </li>

              {/* Service Dropdown */}
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle">Service</div>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/add-service">
                    Add Service
                  </Link>
                  <Link className="dropdown-item" to="/list-service">
                    List Service
                  </Link>
                </div>
              </li>

              {/* Testimonial Dropdown */}
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle">Testimonial</div>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/add-testimonial">
                    Add Testimonial
                  </Link>
                  <Link className="dropdown-item" to="/list-testimonial">
                    List Testimonial
                  </Link>
                </div>
              </li>

              {/* Ongoing Dropdown */}
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle">Ongoing</div>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/add-ongoing">
                    Add Ongoing
                  </Link>
                  <Link className="dropdown-item" to="/list-ongoing">
                    List Ongoing
                  </Link>
                </div>
              </li>

              {/* Complete Dropdown */}
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle">Complete</div>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/add-complete">
                    Add Complete
                  </Link>
                  <Link className="dropdown-item" to="/list-complete">
                    List Complete
                  </Link>
                </div>
              </li>

              {/* Gallery Dropdown */}
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle">Gallery</div>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/add-gallery">
                    Add Gallery
                  </Link>
                  <Link className="dropdown-item" to="/list-gallery">
                    List Gallery
                  </Link>
                </div>
              </li>

              {/* Contact Dropdown */}
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle">Contact</div>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/add-contact">
                    Add Contact
                  </Link>
                  <Link className="dropdown-item" to="/list-contact">
                    List Contact
                  </Link>
                </div>
              </li>

              {/* Other Navbar Items */}
              <li className="nav-item">
                <Link onClick={logout} to="/LogIn" className="nav-link">
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
            </>
          ) : (
            <div className="register">
              <Link to="/LogIn" className="login-text">
                Login
              </Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
