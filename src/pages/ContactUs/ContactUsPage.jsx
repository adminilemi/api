import React from 'react';
import './ContactUs.scss';
import HeroPageReUseable from '../../Components/Re-useable-components/HeroPageReUseable';
import addressImage from '../../assets/images/AddressImage.svg';
import phoneImage from '../../assets/images/PhoneImage.svg';
import emailImage from '../../assets/images/EmailImage.svg';
import AreYourALandord from '../../Components/AreYourALandord';

function ContactUs() {
  return (
    <main className='contact'>
      <HeroPageReUseable text='Contact us' />
      <section className='container contactContent mt-5'>
        <h2 className='my-3'>
          Get in <span>Touch</span>
        </h2>
        <p>
          Connect with us; your dream home is just a message away. Let's discuss
          how we can turn your vision into reality.
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

      <AreYourALandord />
    </main>
  );
}

export default ContactUs;
