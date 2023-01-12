import React from "react";
import axios from "axios";
import { NavLink, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import About from "./about";

// let GetUsers = () => {
//     return <h1>Hello World!</h1>
// }

class Header extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <NavLink to="/home" className="margin-mar">Home</NavLink>
                    <NavLink to="/contactus" className="margin-mar">Contact us</NavLink>
                    <NavLink to="/aboutus" className="margin-mar">About us</NavLink>

                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/contactus" element={<Contact />} />
                        <Route path="/aboutus" element={<About />} />
                    </Routes>
                </HashRouter>
            </div>
        )
    }
}

export default Header