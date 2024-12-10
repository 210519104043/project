import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const Header = () => {


    return (
        <>
            <header className="header">
                <Link to="/"><img src="https://media.idownloadblog.com/wp-content/uploads/2020/06/294843A2-55F5-4BA9-B80E-E50EC251D62A-745x425.jpeg"
                    alt="Company Logo" className="logo" /> </Link>
                <h1 className="company-name">Arise</h1>
                <div className="search-bar">

                    <input type="text" placeholder="Search for products, brands and more..." />
                    <button className='btn'>Search</button>
                </div>
                <div className="auth-buttons">
                    <Link to="sign-in"><button className="btn">Sign In</button></Link>
                    <Link to="/"><button class="btn">Sign Out</button></Link>
                </div>
            </header>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/tableproduct">Products</Link>
                <Link to="/deals">Deals</Link>
                <Link to="#" >Contact Us</Link>
            </div>

        </>
    );
}

export default Header;