// Imports básicos
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h2>Home Page</h2>
      <Link to="/detail?id=1234">Detail Screen</Link>
    </>
  )
}