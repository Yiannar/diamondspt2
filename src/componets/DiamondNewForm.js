import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import'./DiamondNewForm.css'
import Diamondlogo from '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/assets/Diamondlogo.png'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
       <h2 className='title'>Enter a custom Diamond</h2>
            <img src={Diamondlogo} class="form-img" />
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off" >

      <TextField 
      id="outlined-required" 
      label="Shape" 
      variant="outlined" 
      value={diamond.shape} 
      onChange={handleTextChange}
      size="small" />

      <TextField 
      id="outlined-required" 
      label="Image Url" 
      variant="outlined" 
      value={diamond.image} 
      onChange={handleTextChange} 
      pattern='http[s]*://.+' 
      size="small"/>

      <TextField
          id="outlined-number"
          label="Carat"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }} />

         <TextField 
         id="outlined-required" 
         label="Color" 
         variant="outlined" 
         value={diamond.color} 
         onChange={handleTextChange}
         size="small" />
        
         <TextField 
         id="outlined-required" 
         label="Cut" 
         variant="outlined" 
         value={diamond.cut} 
         onChange={handleTextChange}
         size="small" />
        
         <TextField 
         id="outlined-number" 
         label="Price" 
         type="number"
         size="small"
          InputLabelProps={{
            shrink: true,
          }}
          />
    </Box>
   
    </div>
)
}

export default DiamondNewForm;