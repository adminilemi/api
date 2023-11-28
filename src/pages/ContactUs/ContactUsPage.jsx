import React from 'react';
import './ContactUs.scss';
import HeroPageReUseable from '../../Components/Re-useable-components/HeroPageReUseable';
import addressImage from '../../assets/images/AddressImage.svg';
import phoneImage from '../../assets/images/PhoneImage.svg';
import emailImage from '../../assets/images/EmailImage.svg';
import AreYourALandord from '../../Components/AreYourALandord';
import map from '../../assets/images/map.png';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@formspree/react';

function ContactUs() {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm('meqbbzne');

  if (state.succeeded) {
    navigate('/success');
  }

  return (
    <main className='contact'>
      <HeroPageReUseable text='Contact us' />
      <section className='container contactContent mt-5 d-flex flex-column flex-lg-row justify-content-between'>
        <article className='col-12 col-lg-5'>
          <h2 className='my-3'>
            Get in <span>Touch</span>
          </h2>
          <p>
            Connect with us; your dream home is just a message away. Let's
            discuss how we can turn your vision into reality.
          </p>
          <section className='mt-5'>
            <form
              onSubmit={handleSubmit}
              className='d-flex flex-column justify-content-between'
            >
              <div className='inputWrapper'>
                <input
                  id='fullName'
                  name='fullName'
                  type='text'
                  placeholder='Full Name *'
                  className='form-control'
                  required
                />
              </div>
              <div className='inputWrapper'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email *'
                  className='form-control'
                  required
                />{' '}
              </div>
              <div className='inputWrapper'>
                <input
                  id='phoneNumber'
                  name='phoneNumber'
                  type='number'
                  placeholder='Phone number *'
                  className='form-control'
                  required
                />{' '}
              </div>
              <div className='inputWrapper'>
                <input
                  id='whatsappNumber'
                  name='whatsappNumber'
                  type='number'
                  placeholder='Whatsapp number *'
                  className='form-control'
                  required
                />{' '}
              </div>
              <div className='inputWrapper'>
                <select
                  className='form-select'
                  id='category'
                  name='category'
                  required
                >
                  <option value=''>How did you find us?</option>
                  <option value='Instagram'>Instagram</option>
                  <option value='Twitter'>Twitter</option>
                  <option value='Facebook'>Facebook</option>
                  <option value='Whatsapp'>Whatsapp</option>
                  <option value='Word of mouth'>Word of mouth</option>
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

            <div className='d-flex flex-column moreInfo'>
              <div className='d-flex gap-1 col-12 my-3'>
                <figure className='col-1 '>
                  <img src={addressImage} className='' alt='logo' />
                </figure>
                <div className='d-flex flex-column'>
                  <p>ADDRESS</p>
                  <span>17 Olujobi Street, Gbagada Shomolu, Lagos Nigeria</span>
                </div>
              </div>
              <div className='d-flex flex-column flex-lg-row gap-2'>
                <div className='d-flex gap-1 col-12 col-lg-5  my-3 my-lg-0'>
                  <figure className='col-1 col-lg-2'>
                    <img src={phoneImage} className='' alt='logo' />
                  </figure>

                  <div className='d-flex flex-column'>
                    <p> PHONE</p>
                    <a href='tel:+234 802 304 1037'>+234 802 304 1037</a>
                  </div>
                </div>

                <div className='d-flex gap-1 col-12 col-lg-5 '>
                  <figure className='col-1 col-lg-2'>
                    <img src={emailImage} className='' alt='logo' />
                  </figure>

                  <div className='d-flex flex-column'>
                    <p>EMAIL</p>

                    <a href='mailto:enquires@ile-mi.ng'>enquires@ile-mi.ng</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        <aside className='col-12 col-lg-6 mt-5 mt-lg-0'>
          <figure>
            <img src={map} alt='' />
          </figure>
        </aside>
      </section>

      <AreYourALandord />
    </main>
  );
}

export default ContactUs;
