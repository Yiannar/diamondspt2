import React from 'react';
import { useState } from 'react';

const Checkout = ({cart}) => {
    
    const [userInput, setUserInput] = useState({
        firstName:"",
        lastName:"",
        email:"",
        address:"",
        zipCode:"",
    })

    function handleChange(e){
        setUserInput({
            ...userInput,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        setUserInput({
            firstName:"",
            lastName:"",
            email:"",
            address:"",
            zipCode:"",
        })

        alert ("Congratulations! You have successfully made a purchase")
    }
    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                name='fName'
                id="firstName"
                type="text"
                value={userInput.firstName}
                onChange={handleChange}
                />

            </form>
        </div>
    );
};

export default Checkout;