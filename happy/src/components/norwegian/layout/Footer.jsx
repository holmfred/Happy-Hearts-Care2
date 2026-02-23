import NavLink from "react-bootstrap/esm/NavLink";
import FullLogo from "../../../images/FullLogo.png"


function Footer() {
  return (
    <footer id="footer">
      <div className="footer-desktop">
        <div className="footer-left">
          <img src={FullLogo} alt="Happy Hearts Care Logo" />
          <p>©2026 Happy Hearts Care</p>
        </div>
        <div className="footer-middle">
          <div className="footer-info">
            <p>post@happyheartscare.org</p>
            <p>Org.nummer: 920697925</p>
          </div>
          <div className="footer-me">
            <p>Created by: <a href="www.fredriksolsen.com">Fredrik Sørlien Olsen</a></p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <NavLink to="/" className="footer-link">
              Sideregler
            </NavLink>
            <NavLink to="/" className="footer-link">
              Personvern
            </NavLink>
            <NavLink to="/" className="footer-link">
              Skatterefusjon
            </NavLink>
          </div>
          <div className="footer-social">
            <i className="fa-brands fa-facebook fa-2x"></i>
          </div>
        </div>
      </div>

      <div className="footer-mobile">
        <div className="footer-links">
            <NavLink to="/" className="footer-link">
              Sideregler
            </NavLink>
            <NavLink to="/" className="footer-link">
              Personvern
            </NavLink>
            <NavLink to="/" className="footer-link">
              Skatterefusjon
            </NavLink>
        </div>
        <div className="footer-info">
            <p>post@happyheartscare.org</p>
            <p>Org.nummer: 920697925</p>
        </div>
        <div className="footer-social">
            <i className="fa-brands fa-facebook"></i>
          </div>
        <div className="footer-left">
          <img src={FullLogo} alt="Happy Hearts Care Logo" />
          <p>©2026 Happy Hearts Care</p>
        </div>
        <div className="footer-me">
            <p>Created by: <a href="www.fredriksolsen.com">Fredrik Sørlien Olsen</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;