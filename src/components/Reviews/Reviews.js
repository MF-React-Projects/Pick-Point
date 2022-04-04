import React from 'react';
import './Reviews.css';
import useReviews from "../../hooks/useReviews";
import {Container, Row} from "react-bootstrap";
import ReviewItem from "../ReiewItem/ReviewItem";
import {Link} from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <section className="testimonial-section">
            <Container>
                <div className="section-title mb-5 text-center">
                    <h2>Customer Review ({reviews.length})</h2>
                </div>
                <div className="review-items">
                    <Row>
                        {
                            reviews.slice(0, 3).map(review => <ReviewItem key={review.id} review={review}/>)
                        }
                    </Row>
                </div>
                <div className="view-all-reviews text-center mt-5">
                    <Link to="/reviews" className={'btn-default'}>View All Reviews</Link>
                </div>
            </Container>
        </section>
    );
};

export default Reviews;