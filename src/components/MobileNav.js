import React, { useState } from "react";
import "../styles/mobilenav.scss";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import Headroom from "react-headroom";

export default function MobileNav() {
    const [show, setShow] = useState(false);

    const toggleMenu = (e) => {
        setShow(!show);
    };

    return (
        <div className="mobile-nav" style={{ zIndex: 70000 }}>
            <OutsideClickHandler
                onOutsideClick={() => {
                    setShow(false);
                }}
            >
                <Headroom>
                    <div className="toggle-nav" onClick={toggleMenu}>
                        MENU
                    </div>

                    <nav style={{ display: show ? "block" : "none" }}>
                        <Link className="mobile-nav-link" to="/">
                            Home
                        </Link>
                        <Link className="mobile-nav-link" to="/projects">
                            Projects
                        </Link>
                        {/* <Link className="mobile-nav-link" to="/about">
                            About
                        </Link>
                        <Link className="mobile-nav-link" to="/contact">
                            Contact
                        </Link> */}
                    </nav>
                </Headroom>
            </OutsideClickHandler>
        </div>
    );
}
