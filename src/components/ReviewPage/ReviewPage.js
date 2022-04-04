import React from 'react';
import useReviews from "../../hooks/useReviews";
import {Container, Row} from "react-bootstrap";
import ReviewItem from "../ReiewItem/ReviewItem";

const ReviewPage = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <section className="testimonial-section">
            <Container>
                <div className="section-title mb-5 text-center">
                    <h2>What Our Customer Says</h2>
                </div>
                <div className="review-items">
                    <Row>
                        {
                            reviews.map(review => <ReviewItem key={review.id} review={review} reviewPage/>)
                        }
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default ReviewPage;