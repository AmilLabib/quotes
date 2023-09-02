import React, { useState } from "react";
import "./App.css";
import { quotesList } from "./quoteList";

function generateQuotes() {
  const n = Math.floor(Math.random() * (quotesList.length - 1));
  return quotesList[n];
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r},${g},${b},70)`;
}
function App() {
  const temp = useState(getRandomColor());
  const [backgroundColor, setBackgroundColor] = temp;
  const [textColor, setTextColor] = temp;
  const [quotes, setQuotes] = useState(generateQuotes());

  const changeColor = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
    setTextColor(newColor);
    const newQuotes = generateQuotes();
    setQuotes(newQuotes);
  };

  return (
    <>
      <div className="hero defBack" style={{ backgroundColor }}>
        <div id="quote-box">
          <div className="quote-top">
            <i class="bi bi-quote" style={{ color: textColor }}></i>
            <h1 id="text" style={{ color: textColor }} className="defCol">
              {quotes.text}
            </h1>
          </div>

          <h2 className="author" id="author">
            - {quotes.author}
          </h2>

          <div className="quote-bot">
            <div className="share">
              <a
                href={
                  "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
                  quotes.text +
                  "  - " +
                  quotes.author
                }
                target="_blank"
                rel="noopener"
                style={{ backgroundColor }}
                id="tweet-quote"
              >
                <i class="bi bi-twitter"></i>
              </a>
              <a
                href="https://stackoverflow.com"
                rel="noopener"
                target="_blank"
                style={{ backgroundColor }}
              >
                <i class="bi bi-stack-overflow"></i>
              </a>
            </div>

            <button
              id="new-quote"
              onClick={changeColor}
              style={{ backgroundColor }}
            >
              New Quote
            </button>
          </div>
        </div>

        <div className="footer">
          <h4>
            by <span className="name">AmilLabib</span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default App;
