import React, {useState} from 'react';

const ContactUs = () => {
    const [userInput, setUserInput]= useState("")
 //console.log(userInput)

// const[userOptions, setUserOptions]= useState("")

const handleTextChange = (e)=>{
    setUserInput(e.target.value)
}

const handleSubmit = (e)=>{
    e.preventDefault()
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fName'>First Name</label>
                <input
                id='fName'
                type= 'text'
                value={userInput}
                onChange={handleTextChange}
                placeholder='Jane'
                required/>
                <label htmlFor='lName'>Last Name</label>
                <input
                id='lName'
                type= 'text'
                value={userInput}
                onChange={handleTextChange}
                placeholder='Doe'
                required/>
                 <label htmlFor='email'>Email</label>
                <input
                id='email'
                type= 'text'
                value={userInput}
                onChange={handleTextChange}
                placeholder='Janedoe@gmail.com'
                required/>
                <label>Message Us</label>
               <input
               id='message'
               type='text'
               value={userInput}
               onChange={handleTextChange}
               placeholder='Your Message Here'/>
                <br/>
                <button className='submit' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;