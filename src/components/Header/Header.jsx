import React from "react";
import logo from '../../img/logo.svg';
import "./Header.css";
export const Header = () => {
	return (<header>
                <nav className="navbar navbar-expand-lg mt-2">
                    <div className="container">
                        <a className="navbar-brand logo pe-3" href="#"><img src={logo} alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                 <span className="navbar-toggler-icon"></span>
                                    </button>
        
                        <ul className="navbar-nav me-auto ms-1">
                            <li className="nav-item">
                                <a className="nav-link DM-Sans" href="#">Marketplace</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link DM-Sans" href="#">Resource</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link DM-Sans" href="#">About</a>
                            </li>
        
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>);
};
