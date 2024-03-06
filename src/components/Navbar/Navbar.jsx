import logo from "../../assets/CannaLogo.png";
import "../Navbar/navbar.css";
import insta from "../../assets/instagram.png";
import fb from "../../assets/facebook.png";
import { useEffect, useState } from "react";
import gsap from "gsap";
export function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const links = [
    { linkName: "About Us", link: "" },
    { linkName: "Services", link: "" },
    { linkName: "Projects", link: "" },
    { linkName: "Contact Us", link: "" },
  ];

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  useEffect(() => {
    if (hoverIndex !== null) {
      gsap.from(".underline", 0.8, {
        scaleX: 0,
        transformOrigin: "50% 50%",
        ease: "power4.out",
      });
    }
  }, [hoverIndex]);

  return (
    <div className="navbar-main-container">
      <div className="navbar-info-container">
        <div className="navbar-slogan-container">
          <p className="font1 f1-5">
            " Your Digital Spark, Your Business Brilliance."
          </p>
        </div>
        <img src={logo} className="navbar-main-logo" />
        <div className="navbar-socials-container">
          <img src={insta} className="navbar-social-png" />
          <img src={fb} className="navbar-social-png" />
        </div>
      </div>
      <div className="navbar-links-container">
        {links.map((link, index) => {
          return (
            <div
              className="navbar-link-cont"
              key={link.linkName}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="navbar-link font2">
                {link.linkName}
              </a>
              <div className="underline-container">
                {hoverIndex === index && <div className="underline"></div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
