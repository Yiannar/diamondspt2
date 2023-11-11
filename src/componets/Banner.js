import React, { useState, useEffect } from 'react';
import './Banner.css'

const Banner = () => {
    const messages = [
        "Book your Complimentary Styling Session",
        "Customize your own diamond",
        "Stay tuned for updates",
    ];

    const [index, setIndex] = useState(0);

    const handlePrevious = () => {
        const newIndex = (index - 1 + messages.length) % messages.length;
        setIndex(newIndex);
    }

    const handleNext = () => {
        const newIndex = (index + 1) % messages.length;
        setIndex(newIndex);
    }

    const languageOptions = [
        { label: 'English', value: 'en' },
        { label: 'Spanish', value: 'es' },
        { label: 'French', value: 'fr' },
        // Add more language options as needed
    ];

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        // Implement language change logic here
        // You can set the selected language in your app's state or use a translation library
    }

    useEffect(() => {
        const interval = setInterval(handleNext, 5000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="banner">
            <div className="banner-buttons">
                <button onClick={handlePrevious}>Previous</button>
            </div>
            <div className="banner-content">
                <p>{messages[index]}</p>
            </div>
            <div className="banner-buttons">
                <button onClick={handleNext}>Next</button>
            </div>
            <div className="banner-navigation">
                {/* <a href="/about-us">About Us</a>
                <select onChange={handleLanguageChange}>
                    {languageOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select> */}
            </div>
        </div>
    );
};

export default Banner;

