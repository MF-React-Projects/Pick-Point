import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {Container, Nav} from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {

    const handleMobileMenuIn = () => {
        document.querySelector('.header').classList.remove('nav-open');
        document.querySelector('.header').style.transitionDelay = '0.5s';
        document.querySelector('.header .layer').style.transitionDelay = '0.3s';
        document.querySelector('.header .inner').style.transitionDelay = '0s';
        document.querySelector('.hamburger.hamburger-in').classList.remove('opened-navi');
    }

    const handleMobileMenuOut = () => {
        document.querySelector('.header').classList.add('nav-open');
        document.querySelector('.header.nav-open').style.transitionDelay = '0s';
        document.querySelector('.header.nav-open .layer').style.transitionDelay = '0.2s';
        document.querySelector('.header.nav-open .inner').style.transitionDelay = '0.7s';
        document.querySelector('.hamburger.hamburger-in').classList.add('is-opened-navi');
    }

    return (
        <header className="header">
            <div className="header-bottom">
                <div className="menu-wrapper">
                    <Nav className="primary-menu">
                        <Container>
                            <div className="menu-area">
                                <div className="header-logo">
                                    <Link to="/">
                                        <h4>Pick Point</h4>
                                    </Link>
                                </div>
                                <div className="main-menu-area">
                                    <ul className="main-menu">
                                        <li className="menu-item">
                                            <CustomLink to="/">Home</CustomLink>
                                        </li>
                                        <li className="menu-item">
                                            <CustomLink to='/reviews'>Reviews</CustomLink>
                                        </li>
                                        <li className="menu-item">
                                            <CustomLink to="/dashboard">Dashboard</CustomLink>
                                        </li>
                                        <li className="menu-item">
                                            <CustomLink to="/blogs">Blogs</CustomLink>
                                        </li>
                                        <li className="menu-item">
                                            <CustomLink to="/about">About</CustomLink>
                                        </li>
                                    </ul>
                                    <div className="nav-icon">
                                        <div className="nav-icon-inner">
                                            <div onClick={handleMobileMenuOut} className="hamburger hamburger-out" id="hamburger">
                                                <div className="hamburger__line hamburger__line--01">
                                                    <div className="hamburger__line-in hamburger__line-in--01"></div>
                                                </div>
                                                <div className="hamburger__line hamburger__line--02">
                                                    <div className="hamburger__line-in hamburger__line-in--02"></div>
                                                </div>
                                                <div className="hamburger__line hamburger__line--03">
                                                    <div className="hamburger__line-in hamburger__line-in--03"></div>
                                                </div>
                                                <div className="hamburger__line hamburger__line--cross01">
                                                    <div
                                                        className="hamburger__line-in hamburger__line-in--cross01"></div>
                                                </div>
                                                <div className="hamburger__line hamburger__line--cross02">
                                                    <div
                                                        className="hamburger__line-in hamburger__line-in--cross02"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Nav>
                </div>
            </div>
            <div className="mobile-menu-main">
                <div className="mobile-menu">
                    <ul className="main-menu d-flex flex-column">
                        <li className="menu-item active">
                            <CustomLink to="/">Home</CustomLink>
                        </li>
                        <li className="menu-item">
                            <CustomLink to='/reviews'>Reviews</CustomLink>
                        </li>
                        <li className="menu-item">
                            <CustomLink to="/dashboard">Dashboard</CustomLink>
                        </li>
                        <li className="menu-item">
                            <CustomLink to="/blogs">Blogs</CustomLink>
                        </li>
                        <li className="menu-item">
                            <CustomLink to="/about">About</CustomLink>
                        </li>
                    </ul>
                    <div className="nav-burger">
                        <div className="nav-icon">
                            <div className="nav-icon-inner">
                                <div onClick={handleMobileMenuIn} className="hamburger hamburger-in is-opened-navi" id="hamburger">
                                    <div className="hamburger__line hamburger__line--01">
                                        <div className="hamburger__line-in hamburger__line-in--01"></div>
                                    </div>
                                    <div className="hamburger__line hamburger__line--02">
                                        <div className="hamburger__line-in hamburger__line-in--02"></div>
                                    </div>
                                    <div className="hamburger__line hamburger__line--03">
                                        <div className="hamburger__line-in hamburger__line-in--03"></div>
                                    </div>
                                    <div className="hamburger__line hamburger__line--cross01">
                                        <div className="hamburger__line-in hamburger__line-in--cross01"></div>
                                    </div>
                                    <div className="hamburger__line hamburger__line--cross02">
                                        <div className="hamburger__line-in hamburger__line-in--cross02"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;