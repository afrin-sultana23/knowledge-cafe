import React from 'react';
import './header.css'


const Header = () => {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg ">
                <div className="topbar container">
                    <h1>Knowledge Cafe</h1>
                    <div className="menu">
                        <a href="/blog">Blog</a>
                        <a href="/events">Events</a>
                        <a href="/more">More</a>
                        <a href="/login">Login</a>
                    </div>
                    <img
                        id="profile"
                        src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="rounded-circle"
                        alt=""
                    />
                </div>
            </nav>
        </div>
    );
};

export default Header;