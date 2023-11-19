import HeroSectionLandingPage from '../../Components/main-components/HeroSectionLandingPage';

import './landingpage.scss';
import vHome from '../../assets/images/virtualHome.svg';
import homeIllustration from '../../assets/images/Illustration.svg';
import Tabs from '../../Components/Tabs/Tabs';
import Button from '../../Components/Button/Button';
import AreYourALandord from '../../Components/AreYourALandord';

function LandingPage() {
  return (
    <main className='home'>
      <HeroSectionLandingPage />

      <section className='beTheFirst container d-flex flex-column flex-lg-row justify-content-between align-items-center mt-5'>
        <article data-aos='zoom-in' className=' col-12 col-lg-5 mb-4 mb-lg-0'>
          <figure className='icon mx-3'>
            <img src={vHome} alt='' />
          </figure>
        </article>
        <article className=' col-12 col-lg-6 p-2 p-lg-5'>
          <Tabs />
        </article>
      </section>

      <section className='findNew mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center mt-5'>
        <article className='content col-12 col-md-5'>
          <h2 className='mb-3'>The new way to find your new office</h2>
          <p>
            Discover your ideal workspace from a selection of over 10,000 listed
            commercial properties.
          </p>

          <Button title='JOIN OUR WAIT  LIST' url='/join-form' />
        </article>

        <article className='homeImage col-12 col-lg-7 mb-4 mb-lg-0 '>
          <figure data-aos='zoom-in' className='d-none d-md-flex'>
            <img src={homeIllustration} alt='' />
          </figure>
          {/* <figure className='d-flex d-md-none'>
            <img src={homeIllustration} alt='' className='mobileHome ' />
          </figure> */}
        </article>
      </section>

      <AreYourALandord />
    </main>
  );
}

export default LandingPage;
