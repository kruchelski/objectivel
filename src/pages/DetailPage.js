// Imports básicos
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function DetailPage() {
  const { search } = useLocation();
  const match = search.split('?id=');
  const query = match?.[1];

  useEffect(() => {
    console.log(search)
    console.log('Será que vai ter coisa na query?');
    console.log(query);
  }, [query, search])

  return (
    <>
      <h2>Detail Page</h2>
      <h3>{query}</h3>
    </>
  )

}