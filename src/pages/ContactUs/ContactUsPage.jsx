import React, { useState } from 'react';
import './ContactUs.scss';
import HeroPageReUseable from '../../Components/Re-useable-components/HeroPageReUseable';
import addressImage from '../../assets/images/AddressImage.svg';
import phoneImage from '../../assets/images/PhoneImage.svg';
import emailImage from '../../assets/images/EmailImage.svg';
import AreYourALandord from '../../Components/AreYourALandord';
import axios from 'axios';

function ContactUs() {
  const [formData, setFormdata] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    whatsappNumber: '',
    category: '',
  });

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
        // Log the response status and body
        console.log('Response Status:', sendForm.status);
        const data = await sendForm.json();

        console.log(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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

      <AreYourALandord />
    </main>
  );
}

export default ContactUs;
