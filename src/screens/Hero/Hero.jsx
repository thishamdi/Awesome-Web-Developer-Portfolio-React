import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="content">
            <div className="left" data-aos="fade-right">
              <div className="hero-content-box">
                <h1 className="hero-title">
                  Full Stack<br />
                  JS Developer
                </h1>

                <p className="lead">I am Hamdi, a Computer Science graduate and Full Stack Developer, excelling in developing dynamic web applications and modern platforms.</p>
                <div className="button-box">
                  <a href="https://drive.google.com/file/d/10T-A6mIPPZNu2G1lv3u4dWAc7ulaCFIz/view?usp=sharing" className="btn" target="_blank">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="right" data-aos="fade-left">
              <div className="hero-image-box">
                <img src="../images/common/me2.jpg" alt="my image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
