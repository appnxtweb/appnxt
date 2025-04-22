import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { splitter } from "../../../util/Splitter";

const Header = () => {
  const location = useLocation();

  const serviceCategory = useSelector(
    (state) => state.ServiceDataSlice.category
  );
  const services = useSelector((state) => state.ServiceDataSlice.data);

  const [isScrolling, setIsScrolling] = useState(false);
  const [serviceLinks, setServiceLinks] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleServiceDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // useEffect(() => {
  //     console.log(isDropdownVisible)
  // },[isDropdownVisible])

  const toggleServiceLinks = (category) => {
    // console.log(category)
    setServiceLinks(
      services?.filter((value) => value.link.category === category)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resetMenu = () => {
    document.getElementById("slider-menu").style.transform = "translateX(100%)";
    document.getElementById("root").style.overflowY = "";
    document.getElementById("root").style.height = "auto";
  };

  const toggleMenu = (open) => {
    document.getElementById("slider-menu").style.transform = `translateX(${
      open ? "0%" : "100%"
    })`;
    document.getElementById("root").style.overflowY = `${open ? "clip" : ""}`;
    document.getElementById("root").style.height = `${open ? "100vh" : "auto"}`;
  };

  // Add effect to reset menu on route change
  useEffect(() => {
    resetMenu();
  }, [location]);

  const toggleDropdown = (open) => {
    document.getElementById("dropdown-menu").style.opacity = `${open ? 1 : 0}`;
    document.getElementById("dropdown-menu").style.transform = `${
      open ? "translateY(0)" : "translateY(-200%)"
    }`;
    !open && setServiceLinks("webAppDev");
  };

  return (
    <header
      style={
        isScrolling
          ? {
              backgroundColor: "#000",
              transition: "background-color 0.10s ease",
              position: "sticky",
              top: 0,
              zIndex: 999999999999,
            }
          : { position: "sticky", top: 0, zIndex: 999999999999 }
      }
    >
      <div className="container">
        <div className="main-header">
          <NavLink to="/">
            <img className="logo" src="/assets/img/logo.svg" alt="" />
          </NavLink>
          <div className="desktop-menu">
            <ul className="menu-list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li
                onMouseEnter={() => toggleDropdown(true)}
                onMouseLeave={() => toggleDropdown(false)}
                className="drop-down"
              >
                <NavLink to="/services">
                  Services &nbsp; <i className="fa-regular fa-angle-down"></i>
                </NavLink>
                <div id="dropdown-menu" className="dropdown-menu">
                  <div className="part1">
                    <ul>
                      <li className="opacity-5 cs">Main category</li>
                      {serviceCategory?.map((value, index) => {
                        const heading = value; // e.g., "Full Stack Development"
                        const lastWordIndex = heading.split(" ").length - 1; // Get the index of the last word
                        const lastWord = splitter(
                          heading,
                          lastWordIndex,
                          lastWordIndex + 1
                        ); // Extract the last word
                        const mainHeading = splitter(heading, 0, lastWordIndex);
                        return (
                          <li
                            key={index}
                            onMouseEnter={() => toggleServiceLinks(value)}
                            onClick={() => toggleServiceLinks(value)}
                          >
                            <h4>
                              {mainHeading} <span>{lastWord}</span>
                            </h4>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="part2">
                    <ul>
                      <li className="opacity-5">Browse by category</li>
                      {Array.isArray(serviceLinks) &&
                        serviceLinks.length > 0 &&
                        serviceLinks.map((item, index) => (
                          <li key={index}>
                            <NavLink to={`/service/${item?.link?.url}`}>
                              {item.heading}
                            </NavLink>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/digital-banking-solutions">
                  Digital Banking Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/cyber-security">Cyber Security</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="connect-btn">
                  Contact Us <img src="/assets/img/arrow.svg" alt="" />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mobile-menu">
            <div>
              <button
                id="menubtn"
                onClick={() => toggleMenu(true)}
                className="menu-btn"
              >
                <div className="line-1"></div>
                <div className="line-2"></div>
              </button>
            </div>
          </div>
        </div>
        <div id="slider-menu" className="slider-menu">
          <div className="header">
            <div className="part-1">
              <div className="text">
                <p>CALL US</p>
                <h6>(+91) 99300 11856</h6>
              </div>
              <div className="text">
                <p>EMAIL US</p>
                <h6>info@appnxt.in</h6>
              </div>
            </div>
            <div className="main-header p-0">
              <button
                id="menubtn"
                onClick={() => toggleMenu(false)}
                className="menu-btn cross"
              >
                <div className="line-1"></div>
                <div className="line-2"></div>
              </button>
            </div>
          </div>
          <div className="body">
            <img className="gif" src="/assets/img/slider.svg" alt="" />
            <NavLink to="/about" onClick={resetMenu}>
              About Us
            </NavLink>
            <div className="service-dropdown">
              <h5 className="cs" onClick={toggleServiceDropdown}>
                Services <i className="fa-solid fa-sm fa-angle-down"></i>
              </h5>
              {isDropdownVisible && (
                <div className="mob-dropdown-menu">
                  <div className="part1">
                    <ul>
                      {serviceCategory?.map((value, index) => {
                        const heading = value;
                        const lastWordIndex = heading.split(" ").length - 1;
                        const lastWord = splitter(
                          heading,
                          lastWordIndex,
                          lastWordIndex + 1
                        );
                        const mainHeading = splitter(heading, 0, lastWordIndex);
                        return (
                          <li
                            key={index}
                            onClick={() => {
                              toggleServiceLinks(value);
                              resetMenu();
                            }}
                          >
                            <h4>
                              {mainHeading} <span>{lastWord}</span>
                            </h4>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="part2">
                    <ul>
                      <li className="opacity-5">Browse by category</li>
                      {Array.isArray(serviceLinks) &&
                        serviceLinks.length > 0 &&
                        serviceLinks.map((item, index) => (
                          <li key={index}>
                            <NavLink
                              to={`/service/${item?.link?.url}`}
                              onClick={resetMenu}
                            >
                              {item.heading}
                            </NavLink>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/projects" onClick={resetMenu}>
              Projects
            </NavLink>
            <NavLink to="/digital-banking-solutions" onClick={resetMenu}>
              Digital Banking Solutions
            </NavLink>
            <NavLink to="/cyber-security" onClick={resetMenu}>
              Cyber Security
            </NavLink>
            <NavLink to="/contact" onClick={resetMenu}>
              Contact Us
            </NavLink>
          </div>
          <div className="footer">
            <NavLink to="/" onClick={resetMenu} className="font-md">
              TW
            </NavLink>
            <NavLink to="/" onClick={resetMenu} className="font-md">
              FB
            </NavLink>
            <NavLink to="/" onClick={resetMenu} className="font-md">
              YT
            </NavLink>
            <NavLink to="/" onClick={resetMenu} className="font-md">
              BE
            </NavLink>
            <NavLink to="/" onClick={resetMenu} className="font-md">
              DR
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;