import {useState} from 'react'
import ReviewForm from './ReviewForm';
import '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/componets/Review.css'
import StarIcon from '@mui/icons-material/Star';


function Review({ review, handleDelete, handleSubmit }) {
    const [viewEditForm, toggleEditForm] = useState(false);

    const toggleView = () => {
        toggleEditForm(!viewEditForm);
    };
    
    const {title, rating, reviewer, content, id} = review;

    function renderStarIcons(rating) {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          // Render a filled star if the rating is greater or equal to the current star number.
          stars.push(<StarIcon key={i} />);
        } else {
          // Render an empty star if the rating is less than the current star number.
          stars.push(<StarIcon key={i} color="disabled" />);
        }
      }
      return stars;
    }

    
    return (
      <div className="Review">
       
{
 viewEditForm ? (
<ReviewForm
 reviewDetails={review}
 toggleView={toggleView}
 handleSubmit={handleSubmit}/>
 ) : (
  <>
          <h3 className='reviewer'>Reviewer: {reviewer}</h3>
          <h4 className='subject'>
            Subject: {title} 
          </h4>
          <span className='rating'>Rating: {rating}</span>
          <div>{renderStarIcons(rating)}</div>
          <p className='contents'>{content}</p>
          <button className='delete-button'onClick={() => handleDelete(id)}>Delete</button>
        </>
      )}
      <button onClick={toggleView}>Edit this Review</button>
    </div>
  );
  }
  
  export default Review;