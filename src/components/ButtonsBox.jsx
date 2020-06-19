import React from 'react';

const ButtonsBox = ({onClick,text,author}) => (
  <div className="buttons-box">
    <div className="icon-box">
      <a
        id="tweet-quote"
        href= {`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${text}" ${author} `)}`}
        target = "_blank"
        rel="noopener noreferrer"
        title="Tweet this quote!"
        >
            <i className="fab fa-twitter" />
      </a>
    </div>
    <div className="button-box">
      <button
        id="new-quote"
        onClick={onClick}
      >
        New Quotes
      </button>
    </div>
  </div>
)

export default ButtonsBox;