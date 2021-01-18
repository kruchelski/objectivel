// Imports básicos
import React from "react"
import Loader from 'react-loader-spinner'

// Imports de estilos
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import '../styles/LoadingIndicator.css';

export default function LoadingIndicator() {
  return (
    <div className='loading-container'>
      <Loader
         type="Rings"
         color="#555555"
         height={200}
         width={200}
      />
    </div>
  )
}