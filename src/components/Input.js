// Imports básicos
import React, { useState } from 'react';

// Imports de estilo
import '../styles/Input.css';

export default function Input({ onSubmitInput, inputLabel, inputPlaceholder }) {

  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputText || inputText === '') {
      onSubmitInput('');
      return;
    }
    onSubmitInput(inputText.trim())
  }

  return (
    <div className='form-main-container'>
      <form onSubmit={handleSubmit}>
        <label>
          {inputLabel || 'Digite algo para buscar'}
        </label>
        <div className='input-wrapper'>
          <input
            type="text"
            placeholder={inputPlaceholder}
            value={inputText}
            onChange={handleChange}
          />
          <i className="material-icons">search</i>
        </div>
      </form>
    </div>
  )
}