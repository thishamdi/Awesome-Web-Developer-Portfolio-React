import { useState } from "react";
import { linklist } from "../../data";
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.classList.remove('no-scroll');
    } else {
      document.body.classList.add('no-scroll');
    }
  };



  return (
    <>
      <header className="header">
        <div className="container">
          <h6 className="logo-text">Syntax Js</h6>

          <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
            <ul className="menu">
              {linklist.map((link) => (
                <li key={link.id}>
                  <a href={link.link} target={link.target}>
                    <img src={link.icon} alt={link.text} />
                    {link.text}
                  </a>
                </li>
              ))}
              <a href="" className="btn">Contact</a>
            </ul>
          </div>

          <div className="hamburger-menu">
            <span onClick={toggleMenu}>
              {!isMenuOpen ?
                <img src="/images/icons/menu.svg" alt="open" /> :
                <img src="/images/icons/close.svg" alt="open" />
              }
            </span>
          </div>
        </div>
      </header>
    </>
  );
};


export default Header
