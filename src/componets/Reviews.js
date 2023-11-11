import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Review from "./Review";
import '../componets/Reviews.css'
const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();

  const handleToggleReviews = () => {
    setShowReviews(!showReviews);
  };

  useEffect(() => {
    // Fetch the reviews data when the component mounts
    axios
    .get(`${API}/diamonds/${id}/reviews`)
    .then((response) => {
      setReviews(response.data);
    });
  }, [id]);

  const handleDelete = (reviewId) => {
    // Delete the review with the given reviewId
    axios
      .delete(`${API}/reviews/${reviewId}`)
      .then(() => {
        // Remove the deleted review from the reviews state
        const updatedReviews = reviews.filter((review) => review.id !== reviewId);
        setReviews(updatedReviews);
      })
      .catch((c) => console.warn('catch', c));
  };

  const handleEdit = (updatedReview) => {
    // You should update the existing review with updatedReview, not fetch new data
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      }
      return review;
    });

    setReviews(updatedReviews);
  };

  return (
    <section className="Reviews">
      <h2 className="title">
        Reviews{" "}
        <button onClick={handleToggleReviews}>
          {showReviews ? "Hide" : "Show"} Reviews
        </button>
      </h2>

      {showReviews && reviews.length > 0 ? (
        reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            handleDelete={handleDelete}
            handleSubmit={handleEdit}
          />
        ))
      ) : null}
    </section>
  );
}

export default Reviews;
