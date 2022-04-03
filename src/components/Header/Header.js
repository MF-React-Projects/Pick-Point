import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {Container, Nav} from "react-bootstrap";

const Header = () => {
    return (
        <header className="ic-header">
            <div className="ic-header-bottom">
                <div className="ic-menu-wrapper">
                    <Nav className="ic-primary-menu">
                        <Container>
                            <div className="ic-menu-area">
                                <div className="ci-header-logo">
                                    <Link to="/">
                                        <h4>Pick Point</h4>
                                    </Link>
                                </div>
                                <div className="ic-main-menu-area">
                                    <ul className="ic-main-menu">
                                        <li className="ic-menu-item active">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="ic-menu-item">
                                            <Link to='/reviews'>Reviews</Link>
                                        </li>
                                        <li className="ic-menu-item">
                                            <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li className="ic-menu-item">
                                            <Link to="/blogs">Blogs</Link>
                                        </li>
                                        <li className="ic-menu-item">
                                            <Link to="/about">About</Link>
                                        </li>
                                    </ul>
                                    <div className="ic-nav-icon">
                                        <div className="ic-nav-icon-inner">
                                            <div className="hamburger hamburger-out" id="hamburger">
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
            <div className="ic-mobile-menu-main">
                <div className="ic-mobile-menu">
                    <ul className="ic-main-menu d-flex flex-column">
                        <li className="ic-menu-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="ic-menu-item">
                            <Link to='/reviews'>Reviews</Link>
                        </li>
                        <li className="ic-menu-item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="ic-menu-item">
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li className="ic-menu-item">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="ic-nav-burger">
                        <div className="ic-nav-icon">
                            <div className="ic-nav-icon-inner">
                                <div className="hamburger hamburger-in is-opened-navi" id="hamburger">
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