import {useEffect, useState} from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('data/reviewData.json')
            .then(response => response.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return [reviews, setReviews];
}

export default useReviews;