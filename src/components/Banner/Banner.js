import React, {useState} from 'react';
import './Banner.css';
import {Link} from "react-router-dom";
import BannerImage from './images/banner.jpg';

const Banner = () => {
    const [banner, setBanner] = useState([]);

    return (
        <section className="ic-banner-section">
            <div className="container">
                <div className="ic-banner-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <h1 className="ic-banner-title">Pick Your Best Choice</h1>
                            <p>Apple revealed the new 14- and 16- inch MacBook Pro laptops at its “Unleashed” event. The new laptop features a new redesign with smaller bezels, a new display, new ports, new Apple silicon, and more.</p>
                            <Link to="/reviews" className="ic-custom-btn-rvs ic-mt-60">View Details</Link>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-12">
                            <img src={BannerImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;