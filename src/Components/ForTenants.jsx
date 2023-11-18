import React from 'react';
import Button from './Button/Button';

function ForTenants() {
  return (
    <main>
      <h2 className='my-4'>Be the first to know when we go live!</h2>
      <p>
        Are you seeking affordable rental options? Need a workspace or
        short-term accommodation? At Ile - Mi, we've got you covered, making
        your search easy and efficient. The best part? you&apos;ll save a bunch
        of money and time with our services.
      </p>

      <Button title='JOIN OUR WAIT  LIST' url='/join-form' />
    </main>
  );
}

export default ForTenants;
