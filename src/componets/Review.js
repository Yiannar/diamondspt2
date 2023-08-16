import {useState} from 'react'
import ReviewForm from './ReviewForm';

function Review({ review, handleDelete, handleSubmit }) {
    const [viewEditForm, toggleEditForm] = useState(false);
    // console.log(review)
    const toggleView = () => {
        toggleEditForm(!viewEditForm);
    };
    
    const {title, rating, reviewer, content, id} = review;
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
          <h1>Reviewer:{reviewer}</h1>
          <h4>
            Subject:{title} 
          </h4>
          <span>Rating: {rating}</span>
          <p>{content}</p>
          <button className='delete-button'onClick={() => handleDelete(id)}>delete</button>
        </>
      )}
      <button onClick={toggleView}>Edit this Review</button>
    </div>
  );
  }
  
  export default Review;