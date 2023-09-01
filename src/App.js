import React, { useState } from "react";
import "./App.css";

let quotesList = [
  {
    text: "If you can’t explain it simply, you don’t understand it well enough.",
    author: "Albert Einstein",
  },

  {
    text: "I believe every human has a finite number of heartbeats. I don’t intend to waste any of mine.",
    author: "Neil Armstrong",
  },

  {
    text: "I have not failed. I’ve just found 10,000 ways that won’t work",
    author: "Thomas A. Edison",
  },

  {
    text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },

  {
    text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    author: "Charles Darwin",
  },

  {
    text: "It does not matter how slowly you go, so long as you do not stop.",
    author: "Confucius",
  },

  {
    text: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney",
  },

  {
    text: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },

  {
    text: "Only put off until tomorrow what you are willing to die having left undone.",
    author: "Pablo Picasso",
  },

  {
    text: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "Mark Twain",
  },

  {
    text: "Failure is another steppingstone to greatness.",
    author: "Oprah Winfrey",
  },

  {
    text: "The best and most beautiful things in the world cannot be seen or even touched – they must be felt with the heart",
    author: "Helen Keller",
  },

  {
    text: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    author: "Helen Keller",
  },

  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
];

function generateQuotes() {
  const n = Math.floor(Math.random() * 13);
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
      </div>
    </>
  );
}

export default App;
