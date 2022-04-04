import React from 'react';
import './ReviewItem.css';
import {Col} from "react-bootstrap";
import Rating from "react-rating";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                        <Rating
                            initialRating={stars}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                            readonly
                        />
                    </div>
                </div>
                <p className="feedback-text">{comment.slice(0, 230)}...</p>
            </div>
        </Col>
    );
};

export default ReviewItem;