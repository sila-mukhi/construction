// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="container-fluid navbar navbar-expand-lg navbar-light p-0">
//       <div className="container">
//         <Link className="d-block" to="/">
//           <h2 className="header-text">ARYA <span>CONSTRUCTIONS</span></h2>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target=".navbar-collapse"
//           aria-controls="navbar-collapse"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div id="navbar-collapse" className="collapse navbar-collapse">
//           <ul className="nav navbar-nav mr-auto">
//             <li className="nav-item">
//               <NavLink exact to="/" className="nav-link" activeClassName="active-link" >
//                 Home
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink to="/about" className="nav-link" activeClassName="active-link">
//                 About Us
//               </NavLink>
//             </li>

//             <li className="nav-item dropdown">
//               <a
//                 href="#"
//                 className="nav-link dropdown-toggle"
//                 data-toggle="dropdown"
//               >
//                 Our Services <i className="fa fa-angle-down"></i>
//               </a>
//               <ul className="dropdown-menu" role="menu">
//                 <li>
//                   <Link to="/services">Pre-Purchase land verification & Comprehensive legal advice</Link>
//                 </li>
//                 <li><Link to="/services">Documentation</Link></li>
//                 <li><Link to="/services">Architectural plans & designing</Link></li>
//                 <li><Link to="/services">Project Evaluation</Link></li>
//                 <li><Link to="/services">Real Estate Broking</Link></li>
//                 <li><Link to="/services">Free land Consultancy on Sunday</Link></li>
//               </ul>
//             </li>

//             <li className="nav-item dropdown">
//               <a
//                 href="#"
//                 className="nav-link dropdown-toggle"
//                 data-toggle="dropdown"
//               >
//                 Projects <i className="fa fa-angle-down"></i>
//               </a>
//               <ul className="dropdown-menu" role="menu">
//                 <li><Link to="/ongoing-page">Ongoing</Link></li>
//                 <li><Link to="/complete-page">Completed</Link></li>
//               </ul>
//             </li>

//             <li className="nav-item">
//               <NavLink to="/gallery" className="nav-link" activeClassName="active-link">
//                 Gallery
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/contact" className="nav-link" activeClassName="active-link">
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-light p-0">
      <div className="container">
        <Link className="d-block" to="/">
          <h2 className="header-text">ARYA <span>CONSTRUCTIONS</span></h2>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-controls="navbar-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbar-collapse" className="collapse navbar-collapse">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Our Services <i className="fa fa-angle-down"></i>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <Link to="/services">Pre-Purchase land verification & Comprehensive legal advice</Link>
                </li>
                <li><Link to="/services">Documentation</Link></li>
                <li><Link to="/services">Architectural plans & designing</Link></li>
                <li><Link to="/services">Project Evaluation</Link></li>
                <li><Link to="/services">Real Estate Broking</Link></li>
                <li><Link to="/services">Free land Consultancy on Sunday</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Projects <i className="fa fa-angle-down"></i>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li><Link to="/ongoing-page">Ongoing</Link></li>
                <li><Link to="/complete-page">Completed</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
