// Imports básicos
import React, { useState } from 'react';

// Imports de estilo
import '../styles/Input.css';

export default function Input({ onSubmitInput, inputLabel, inputValue, inputPlaceholder }) {

  const [inputText, setInputText] = useState(inputValue);

  /**
   * Ouvir mudanças no input
   * @param {*} event Evento da mudança no input
   */
  const handleChange = (event) => {
    setInputText(event.target.value);
  }

  /**
   * Função para ouvir o evento de submit
   * @param {*} event Evento de submit
   */
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