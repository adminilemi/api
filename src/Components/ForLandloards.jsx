import React from 'react';
import Button from './Button/Button';

function ForLandloards() {
  return (
    <main>
      <h2 className='my-4'>Be the first to know when we go live!</h2>
      <p>
        Whether it&apos;s selling your current home, getting financing, renting
        or buying a new home, we make it easy and efficient. The best part?
        you&apos;ll save a bunch of money and time with our services.
      </p>
      <Button title='JOIN OUR WAIT  LIST' url='/join-form' />
    </main>
  );
}

export default ForLandloards;
