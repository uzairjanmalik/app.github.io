import React, { useState } from 'react';
import scientists from './components/scientists';
import { Input } from 'antd';
import './App.css';

;
function App() {
  const [name, setName] = useState('');
  const [info, setInfo] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const lowerCaseName = name.toLowerCase();
    const scientistInfo = scientists[lowerCaseName];
    if (scientistInfo) {
      setInfo(scientistInfo);
    } else {
      setInfo({ profession: 'Not Found', description: 'No description available.' });
    }
  };

  return (
    <div className="App">
      <h1>Scientist Information</h1>
      <form onSubmit={handleSubmit}>
      <Input type='text'onChange={handleChange} value={name} size="large" placeholder="Enter scientist name" />
        <button type="submit">Submit</button>
      </form>
      {info && (
        <div>
          <h2>{name}</h2>
          <p><strong>Profession:</strong> {info.profession}</p>
          <p><strong>Description:</strong> {info.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
