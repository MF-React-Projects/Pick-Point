import React from 'react';
import './ReviewItem.css';
import {Col} from "react-bootstrap";

const ReviewItem = ({review}) => {
    const {name, comment, stars, avatar} = review;
    return (
        <Col lg={4} md={4}>
            <div className="review-item">
                <div className="review-header">
                    <div className="review-avatar">
                        <img src={avatar} alt="avatar" className='img-fluid'/>
                    </div>
                    <div className="review-info">
                        <p className="name">{name}</p>
                        <p className="stars">{stars}</p>
                    </div>
                </div>
                <p className="feedback-text">{comment.slice(0, 230)}...</p>
            </div>
        </Col>
    );
};

export default ReviewItem;