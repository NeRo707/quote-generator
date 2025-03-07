import "./App.css";
import React, { useState } from "react";

const App = () => {
  const url = "https://thequoteshub.com/api/random-quote";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  const shareToTwitter = () => {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        quote.author +
        " once said: " +
        quote.text
    );
  };

  const shareToWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send?text=" +
        quote.author +
        " once said: " +
        quote.text
    );
  };


  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.text}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
          <button onClick={shareToTwitter}>Share to Twitter</button>
          <button onClick={shareToWhatsApp}>Share to WhatsApp</button>
        </div>
      </div>
    </>
  );
};

export default App;
