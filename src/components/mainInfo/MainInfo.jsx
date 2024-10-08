import React, { useEffect, useState } from 'react';
import './MainInfo.css';
import Typed from 'typed.js';

export default function MainInfo() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // Options for the typed.js instance
    const options = {
      strings: ["REVOLUTIONIZING REAL ESTATE with Tokenized Investments"], 
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed (optional)
      backDelay: 500, // Delay before starting backspacing (optional)
      showCursor: false, // Hide the cursor
      onComplete: (self) => {
        setTypedText(self.strings[0]); // Set the typed text to state after completion
        // self.destroy();
         // Destroy the instance after typing is complete
      }
    };

    // Create a new Typed.js instance
    const typed = new Typed("#now", options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container main-info">
      <div className="row">
        <div className="col-md-8 text-container">
          <h1>
            <span id="now" style={{color:'white'}}>{typedText}</span> {/* Show the typed text */}
          </h1>
          <p id="info">
            We specialize in <span>tokenizing</span> real estate, enabling fractional ownership and seamless trading of property assets on the blockchain.
          </p>

        </div>
      </div>
    </div>
  );
}
