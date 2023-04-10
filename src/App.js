import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: input,
          max_tokens: 100,
          n: 1,
          stop: null,
          temperature: 1.0,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        },
      );
      setResponse(result.data.choices[0].text);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="App">
      <h1>GPT-4 Chat App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">
          Enter your prompt:
          <input
            type="text"
            id="input"
            value={input}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default App;
