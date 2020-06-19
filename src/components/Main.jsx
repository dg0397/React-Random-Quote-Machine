import React, { useState , useEffect } from 'react';
import Quote from './Quote'; // Quote Block component
import ButtonsBox from './ButtonsBox'; // Buttons box Component
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import updateColor from './util/colorUpdate';



const Main = ( { loading, quoteGenerator, colorGenerator} ) =>{
    
    const [mounted , setMounted] = useState(false);
    const [quoteObj, setQuote] = useState({});
    const [color, setColor] = useState('');

    const handleClick = () => {
        setMounted(false);
        setQuote(quoteGenerator);
        setColor(colorGenerator);
        updateColor(color)
    }
    //First side effect after rendering, only is invoked once
    useEffect( () =>{
        if(loading){
            //console.log('here we go')
            setQuote(quoteGenerator);
            setMounted(true);
            setColor(colorGenerator)
        }
    },[loading,colorGenerator,quoteGenerator]);
        
    //Second side effect after rendering, is invoked when handleClick is trigger and after the first side-effect

    useEffect( () =>{
        if(loading && !mounted){
            //console.log('here we go again')
            setMounted(!mounted);
        }
    },[loading,mounted]);

    //console.log(loading)
    //console.log(mounted);
    //console.log(quoteObj);
    //console.log(color)
    
    if(loading){
        let {quote,author} = quoteObj;
        //This is for active the transition componenet
        let quoteBlock = mounted && (<Quote text = {quote} author = {author}/>)
    
        return(
            <div id="quote-box">
              <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              >
                {quoteBlock}
              </ReactCSSTransitionGroup>
              <ButtonsBox 
              onClick = {handleClick}
              text = {quote}
              author = {author} 
              />
            </div>
        )
    }else{
        // while we wait for the data
        return (
            <div className = 'wait'>
                <h1>Wait a minute....</h1>
            </div>
        )
    }
}

export default Main