import HeroPageReUseable from '../../Components/Re-useable-components/HeroPageReUseable';

import './SubscribeForm.scss';

import addressImage from '../../assets/images/AddressImage.svg';
import phoneImage from '../../assets/images/PhoneImage.svg';
import emailImage from '../../assets/images/EmailImage.svg';
import { useState } from 'react';
import axios from 'axios';

function SubscribePage() {
  const [formData, setFormdata] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    whatsappNumber: '',
    category: '',
  });

  // const [errors, setErrors] = useState({
  //   error: false,
  //   errMessage: '',
  // });

  const [loading, setLoading] = useState(false);

  // Handle form event change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);

    try {
      if (formData) {
        const sendForm = await axios.post(
          'https://ile-mi-waitlist-backend-production.up.railway.app/user/join-wait-list',
          formData,
        );

        console.log(sendForm);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
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
                defaultValue={formData.fullName}
                onChange={handleChange}
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
                defaultValue={formData.email}
                onChange={handleChange}
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
                defaultValue={formData.phoneNumber}
                onChange={handleChange}
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
                defaultValue={formData.whatsappNumber}
                onChange={handleChange}
                required
              />{' '}
            </div>
            <div className='inputWrapper'>
              <select
                className='form-select'
                id='category'
                name='category'
                defaultValue={formData.category}
                onChange={handleChange}
                required
              >
                <option value=''>Select your category</option>
                <option value='LandLord'>Landlord</option>
                <option value='Agent'>Agent</option>
                <option value='Tenant'>Tenant</option>
                <option value='Advertiser'>Advertiser</option>
              </select>
            </div>
            <div className='inputWrapper'>
              <button type='submit' className='main-btn col-12'>
                {loading ? 'Sending...' : 'Send'}
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
                <span>17 Olujobi Street, Gbagada Shomolu, Lagos Nigeria</span>
              </div>
            </div>

            <div className='d-flex gap-1 col-12 col-md-4 my-3 my-lg-0'>
              <figure className='col-1'>
                <img src={phoneImage} className='' alt='logo' />
              </figure>

              <div className='d-flex flex-column'>
                <p> PHONE</p>
                <a href='tel:+234 802 304 1037'>+234 802 304 1037</a>
              </div>
            </div>

            <div className='d-flex gap-1 col-12 col-md-3 '>
              <figure className='col-1'>
                <img src={emailImage} className='' alt='logo' />
              </figure>

              <div className='d-flex flex-column'>
                <p>EMAIL</p>

                <a href='mailto:enquires@ile-mi.ng'>enquires@ile-mi.ng</a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default SubscribePage;
