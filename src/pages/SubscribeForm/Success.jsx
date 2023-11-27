import HeroPageReUseable from '../../Components/Re-useable-components/HeroPageReUseable';

import './SubscribeForm.scss';

import succ from '../../assets/images/success.gif';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <main className='subPage'>
      <HeroPageReUseable text='Subscribe Form' />

      <section className='container pageContent mt-5 d-flex flex-column'>
        <figure className='col-12 col-md-4 mx-auto'>
          <img src={succ} alt='' />
        </figure>
        <p className='col-12 col-md-7 mx-auto text-center my-5 success'>
          Thank you for registering! Expect regular updates on our products. We
          appreciate your connection and look forward to staying in touch.
        </p>

        <div className='text-center my-4'>
          <Link className='main-btn' to='/'>
            {' '}
            Close{' '}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Success;
