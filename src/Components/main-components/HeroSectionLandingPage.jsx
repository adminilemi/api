import './HeroSectionLandingPage.scss';
import bigCard from '../../assets/images/heroImag.svg';

import { Link } from 'react-router-dom';

function HeroSectionLandingPage() {
  return (
    <main className='homeHero  col-12'>
      <section className=' d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <article
          data-aos='fade-left'
          className='text d-flex flex-column  text-center text-lg-start col-12 col-md-8 mx-auto col-lg-4 '
        >
          <div className='d-flex flex-column justify-content-between ms-lg-4 ms-0'>
            <h1 className='my-3'>
              Your one stop address for all your property needs.
            </h1>
            <p>
              A great platform to buy, sell, or even rent your properties
              without any commissions.
            </p>
          </div>

          <div className='noSpam d-flex flex-column justify-content-between my-3 ms-lg-4  ms-0'>
            {/* <h3 className='text-start mb-2'>No Spam Promise</h3> */}

            <h4 className='my-2'>Are you a landlord?</h4>
            <p>
              Discover ways to increase your home value and get listed No Spam
            </p>
            <Link to='/join-form' className='main-btn my-3'>
              JOIN OUR WAIT LIST
            </Link>
            <p>
              Join <strong>10,000+</strong> other landlords in our Ile-Mi
              Waiting List
            </p>
          </div>
        </article>
        <article
          data-aos='fade-right'
          className='col-12 col-lg-6 d-none d-lg-flex'
        >
          <img className='image1' src={bigCard} alt='' />
        </article>
      </section>
    </main>
  );
}

export default HeroSectionLandingPage;
