import HeroPageReUseable from '../../Components/Re-useable-components/HeroPageReUseable';

import './SubscribeForm.scss';

import addressImage from '../../assets/images/AddressImage.svg';
import phoneImage from '../../assets/images/PhoneImage.svg';
import emailImage from '../../assets/images/EmailImage.svg';

function SubscribePage() {
  return (
    <main className='subPage'>
      <HeroPageReUseable text='Subscribe Form' />

      <section className='container pageContent mt-5'>
        <h2 className='my-3'>
          Let&apos;s get your <span>Details</span>
        </h2>
        <p>
          Be among the first Agent, Landlord or Tenant to know when we go live!
        </p>
        <section className='mt-5'>
          <form className='d-flex flex-column justify-content-between'>
            <div className='inputWrapper'>
              <input
                id='fullName'
                name='fullName'
                type='text'
                placeholder='Full Name *'
                className='form-control'
              />
            </div>
            <div className='inputWrapper'>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Email *'
                className='form-control'
              />{' '}
            </div>
            <div className='inputWrapper'>
              <input
                id='phoneNumber'
                name='phoneNumber'
                type='number'
                placeholder='Phone number *'
                className='form-control'
              />{' '}
            </div>
            <div className='inputWrapper'>
              <select className='form-select'>
                <option value=''>Select your category</option>
                <option value='LandLord'>Landlord</option>
                <option value='Agent'>Agent</option>
                <option value='Tenant'>Tenant</option>
                <option value='Advertiser'>Advertiser</option>
              </select>
            </div>
            <div className='inputWrapper'>
              <button type='submit' className='main-btn col-12'>
                Send
              </button>
            </div>
          </form>
        </section>

        <section className='d-flex flex-column'>
          <p className='my-3'>For more information reach out to us via: </p>

          <div className='d-flex flex-column flex-md-row moreInfo'>
            <div className='d-flex gap-1 col-12 col-md-5 '>
              <figure className='col-1'>
                <img src={addressImage} className='' alt='logo' />
              </figure>
              <div className='d-flex flex-column'>
                <p>ADDRESS</p>
                <span>16 Olujobi Street, Gbagada Shomolu, Lagos Nigeria</span>
              </div>
            </div>

            <div className='d-flex gap-1 col-12 col-md-4 my-3 my-lg-0'>
              <figure className='col-1'>
                <img src={phoneImage} className='' alt='logo' />
              </figure>

              <div className='d-flex flex-column'>
                <p> PHONE</p>
                <span>+234 802 304 1037</span>
              </div>
            </div>

            <div className='d-flex gap-1 col-12 col-md-3 '>
              <figure className='col-1'>
                <img src={emailImage} className='' alt='logo' />
              </figure>

              <div className='d-flex flex-column'>
                <p>EMAIL</p>

                <span>contact@ile-mi.ng</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default SubscribePage;
