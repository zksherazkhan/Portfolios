import { Link } from "react-scroll";
import "../style/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  nav">
        <div className="container-fluid">
          <Link className="navbar-brand My-Brand ms-3 " to="/">
            Yasar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navIcon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item ">
                <Link
                  className="nav-link myLink"
                  smooth={true}
                  offset={10}
                  duration={500}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link myLink"
                  smooth={true}
                  offset={-10}
                  duration={500}
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link myLink"
                  smooth={true}
                  offset={5}
                  duration={500}
                  to="services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link myLink"
                  smooth={true}
                  offset={-10}
                  duration={500}
                  to="gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link myLink"
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
