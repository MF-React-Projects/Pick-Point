import React from 'react';
import useReviews from "../../hooks/useReviews";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            {reviews.length}
        </div>
    );
};

export default Reviews;