import React from 'react';
import { Link } from 'react-router-dom';

function Button({ title, url }) {
  return (
    <main className='my-4 d-flex text-center col-12'>
      <Link to={url} className='main-btn col-12'>
        {title}
      </Link>
    </main>
  );
}

export default Button;
