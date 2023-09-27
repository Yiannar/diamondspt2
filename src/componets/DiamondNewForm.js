import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import'./DiamondNewForm.css'
import Diamondlogo from '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/assets/Diamondlogo.png'
import ReactModal from 'react-modal';


const API = process.env.REACT_APP_API_URL;

function DiamondNewForm (){
    let navigate = useNavigate()

    
    const [diamond, setDiamond]= useState({
        shape: '',
        image: '', 
        carat: 0,
        color: '',
        clarity:'' ,
        cut: '',
        price: 0, 
        is_reported: false
    })

const addDiamond =(newDiamond)=>{
    axios
    .post(`${API}/diamonds`, newDiamond)
    .then(
        ()=> // update the navigate once user dashboard is created 
            // navigate back to the user dashboard as an inquiry 
            navigate(`/diamonds`)
        )
        .catch((c)=> console.warn('catch',c))
}

const [showModal, setShowModal] = useState(false);
const [submitted, setSubmitted] = useState(false)
  
const handleTextChange = (e)=>{
    setDiamond({...diamond, [e.target.id]: e.target.value})
}


const handleSubmit = (e)=>{
    e.preventDefault()
    addDiamond(diamond)
    setSubmitted(!submitted)
    setShowModal(true)
}

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  

return (

    <div className='form-container'>
        <div className='form-wrapper'>
            <img src={Diamondlogo} class="image" />
        <form  class="row g-3" onSubmit={handleSubmit}>
            {/* {submitted?(
                <div><h3>You have Successfully created a new diamond</h3></div>
            ):(<div></div>)} */}
            <div class="col">
            <label htmlFor='shape'>Shape</label>
            <input
            class="form-control"
            id='shape'
            value={diamond.shape}
            type='text'
            onChange={handleTextChange}
            placeholder="Princess"
            required/>
            </div>
            
            <div class="col">
            <label htmlFor='url'>URL</label>
            <input
            class="form-control"
            id='image'
            value={diamond.image}
            type='text'
            pattern='http[s]*://.+'
            required
            onChange={handleTextChange}
            placeholder="https://"
            />
            </div>
            <div class="col" >
            <label htmlFor='carat'>Carat</label>
            <input
            class="form-control"
            id='carat'
            type= 'number'
            min='0'
            value={diamond.carat}
            onChange={handleTextChange}
            placeholder="1.04"
            required/>
           </div>

           <div class="col" > 
            <label htmlFor='color'>Color</label>
            <input
            class="form-control"
            id='color'
            type= 'text'
            value={diamond.color}
            onChange={handleTextChange}
            placeholder="D"
            required/>
            </div>
            
            <div class="col">
            <label htmlFor='cut'>Cut</label>
            <input
            class="form-control"
            id='cut'
            type= 'text'
            value={diamond.cut}
            onChange={handleTextChange}
            placeholder="Excellent"
            required/>
            </div>
          
           <div class="col">
            <label htmlFor='price'>Budget</label>
            <input
            class="form-control"
            id='price'
            type= 'number'
            min='0'
            value={diamond.price}
            onChange={handleTextChange}
            placeholder="$32,000.00"
            required/>
            </div>
            
            {/* <div class="col"> 
            <label htmlFor="is_reported">Reported</label>
            <input
            class="form-control"
            id="is_reported"
            type="boolean"
            value={diamond.is_reported}
            onChange={handleTextChange}
            />
            </div> */}
            <br/>
            <button class="btn btn-primary" type='submit'>Submit</button>
        </form>
        </div>
        {/* modal to inform that the user has submitted but if it doesnt work use an alert */}
        <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
            >
        <h2>Form Submitted Successfully</h2>
        <p>Your submission was successful!</p>
         <button onClick={closeModal}>Close Modal</button>
        </ReactModal>

   
        
        {/* <Link to={`/diamonds`}>
            <button className='back-button'>Back</button>
        </Link> */}
    </div>
)
}

export default DiamondNewForm;