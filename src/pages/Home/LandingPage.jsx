import Header from '../../Components/main-components/Header';
import HeroSectionLandingPage from '../../Components/main-components/HeroSectionLandingPage';
import { useNavigate } from 'react-router-dom';

import './landingpage.css';
import ReusableButton from '../../Components/Re-useable-components/ReuseableButton';
import iconImage from '../../assets/images/virtualHomeTour.svg';
import findBestDeals from '../../assets/images/findBestDeals.svg';

function LandingPage() {
  const navigate = useNavigate();
  const joinOurWaitingListButton = () => {
    navigate('/join-form');
  };

  return (
    <div className='home'>
      <HeroSectionLandingPage />
      {/* <div className='second-paragraph'>
        <div className='picture-div'>
          <div className='picture-container'>
            <div className='topmost-div my-4 d-flex justify-between p-2'>
              <div className='icon mx-3'>
                <img src={iconImage} alt='' />
              </div>
              <div className='text-part'>
                <p>
                  <span className=''>Virtual home tour</span> <br />
                  we provide you with virtual home tour
                </p>
              </div>
            </div>
            <div className='lower-div my-4 d-flex justify-between p-2'>
              <div className='text-part'>
                <p>
                  <span className=''>Virtual home tour</span> <br />
                  we provide you with virtual home tour
                </p>
              </div>
              <div className='icon-2 mx-5'>
                <img src={findBestDeals} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='text-div'>
          <div className='btn-div'></div>
          <div className='main-text-div'>
            <h2 className='second-paragraph-heading'>
              Be the first to know <br /> when we go live!
            </h2>
            <p className='paragraph-text'>
              Whether it’s selling your current home, getting financing, renting
              or buying a new home, we make it easy and efficient. The best
              part? you’ll save a bunch of money and time with our services.
            </p>
          </div>
          <div className='button-div'>
            <ReusableButton
              text={'JOIN OUR WAIT LIST'}
              onClick={joinOurWaitingListButton}
              maxWidth='343px'
              width='100%'
              height='45px'
              backgroundColor={'#5F259F'}
            />
          </div>
          <div></div>
        </div>
      </div> */}
    </div>
  );
}

export default LandingPage;
