import React, {useEffect, useState} from 'react';
import './Banner.css';
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

const Banner = () => {
    const [banner, setBanner] = useState({});

    useEffect(() => {
        fetch('data/bannerData.json')
            .then(res => res.json())
            .then(data => setBanner(data))
    }, []);

    return (
        <section className="ic-banner-section">
            <Container>
                <Row className="ic-banner-content align-items-center flex-md-row flex-column-reverse">
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="ic-banner-title">{banner.bannerTitle}</h1>
                        <p>{banner.bannerDescription}</p>
                        <Link to="/reviews" className="btn-default">{banner.bannerButtonText}</Link>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='mb-5 mb-md-0'>
                        <img src={banner.bannerImage} alt="" className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;