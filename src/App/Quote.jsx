import React from 'react';

const Quote = ({text,author}) => (
    <div className="text-box">
        <p id="text">
            <span className="quote"><i className="fas fa-quote-left" aria-label="quote icon"></i></span> 
            {text}
        </p>
        <p id="author">
            - {author}
        </p>
    </div>
)

export default Quote;