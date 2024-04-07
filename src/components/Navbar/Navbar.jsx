import logo from "../../assets/CannaLogo.png";
import downArrow from "../../assets/down.png";
import "../Navbar/navbar.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
export function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const links = [
    {
      linkName: "Shop Online",
      linkPng: downArrow,
      link: "",
      isDropdown: true,
    },
    { linkName: "Delivery", link: "", isDropdown: false },
    { linkName: "About", link: "", isDropdown: false },
    { linkName: "Deals", link: "", isDropdown: false },
    { linkName: "FAQs", link: "", isDropdown: false },
    { linkName: "Wellness Blogs", link: "", isDropdown: false },
    {
      linkName: "Locations",
      linkPng: downArrow,
      link: "",
      isDropdown: true,
      isDropdownActive: false,
    },
    { linkName: "Contact Us", link: "", isDropdown: false },
    { linkName: "Loyalty Program", link: "", isDropdown: false },
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
    if (isDropdownActive === true) {
      gsap.from("navbar-dropdown-menu", 1, {
        scaleY: 0,
      });
    }
  }, [hoverIndex]);

  return (
    <div className="navbar-main-container">
      <div className="navbar-info-container">
        <div className="navbar-slogan-container">
          <button className="navbar-shop-delivery-button font2 f1-5">
            {" "}
            Shop Delivery{" "}
          </button>
        </div>
        <img src={logo} className="navbar-main-logo" />
        <div className="navbar-contacts-container">
          <div className="navbar-phone-container">
            <p className="font1 orangeText ">Alternatives on East</p>
            <p className="font2 greenText">000-000-0000</p>
          </div>
          <div className="navbar-phone-container">
            <p className="font1 orangeText">Alternatives on West</p>
            <p className="font2 greenText">000-000-0000</p>
          </div>
          <div className="navbar-phone-container">
            <p className="font1 greenText">alt@alt.com</p>
          </div>
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
              <div className="navbar-link-png-container">
                <a
                  href="#"
                  className="navbar-link font2"
                  onClick={() => {
                    setDropdownIndex(index);
                    setIsDropdownActive(true);
                  }}
                >
                  {link.linkName}
                </a>
                {link.linkPng && (
                  <img src={link.linkPng} className="navbar-dropdown-png" />
                )}
              </div>
              <div className="underline-container">
                {hoverIndex === index && <div className="underline"></div>}
              </div>
              {isDropdownActive && dropdownIndex === index ? (
                <div className="navbar-dropdown-menu">
                  {link.linkName === "Locations" && (
                    <DropdownMenu options={["Where", "Where"]} />
                  )}
                  {link.linkName === "Shop Online" && (
                    <DropdownMenu options={["Shop", "Here"]} />
                  )}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DropdownMenu({ options }) {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <div key={index}>
            <h1>{option}</h1>
          </div>
        );
      })}
    </div>
  );
}
