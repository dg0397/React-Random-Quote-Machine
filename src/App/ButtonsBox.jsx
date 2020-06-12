import React from 'react';

const ButtonsBox = () => (
    <div className="buttons-box">
        <div className="icon-box">
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            <i className="fab fa-twitter"/>
          </a>
        </div>
        <div className="button-box">
          <button id="new-quote">New quote</button>
        </div>
    </div>
)

export default ButtonsBox;