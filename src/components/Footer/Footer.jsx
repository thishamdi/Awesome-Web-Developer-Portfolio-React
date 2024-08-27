import { linklist } from "../../data";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">

          <div className="footer-menu">
            <ul>
              {linklist.map((link) => (
                <li key={link.id}>
                  <a href={link.link} target={link.target}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="copy-text">
            <p> &copy; Syntax Js, All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer
