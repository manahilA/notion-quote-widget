import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [keyword, setKeyword] = useState('art');

  const fetchQuote = async () => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${keyword}`, {
        headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY }
      });
      const fetchedQuote = response.data[0];
      setQuote(fetchedQuote.quote);
      setAuthor(fetchedQuote.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div id="quote-container">
      <h2>Quote of the Day</h2>
      <p id="quote-text">{quote}</p>
      <p id="quote-author">{author}</p>
      <select id="keyword-select" onChange={(e) => setKeyword(e.target.value)} value={keyword}>
          <option value="art">art</option>
          <option value="business">business</option>
          <option value="change">change</option>
          <option value="courage">courage</option>
          <option value="dreams">dreams</option>
          <option value="education">education</option>
          <option value="environmental">environmental</option>
          <option value="experience">experience</option>
          <option value="failure">failure</option>
          <option value="faith">faith</option>
          <option value="family">family</option>
          <option value="fitness">fitness</option>
          <option value="friendship">friendship</option>
          <option value="funny">funny</option>
          <option value="future">future</option>
          <option value="happiness">happiness</option>
          <option value="hope">hope</option>
          <option value="inspirational">inspirational</option>
          <option value="knowledge">knowledge</option>
          <option value="leadership">leadership</option>
          <option value="life">life</option>
          <option value="love">love</option>
          <option value="money">money</option>
          <option value="morning">morning</option>
          <option value="success">success</option>

      </select>
      <button id="fetch-quote" onClick={fetchQuote}>Get Quote</button>
    </div>
  );
}

export default App;
