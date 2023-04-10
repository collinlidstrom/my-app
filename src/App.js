import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState(null);

  const apiKey = 'your-api-key'; // Replace with your GPT-4 API key
  const apiUrl = 'https://api.example.com/v1/your-gpt-4-endpoint'; // Replace with the GPT-4 API endpoint

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        apiUrl,
        {
          // Add your request payload here (prompt, max tokens, etc.)
          prompt: inputText,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        },
      );
      setResponse(result.data);
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };

  return (
    <div className="App">
      <h1>GPT-4 API Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input Text:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
