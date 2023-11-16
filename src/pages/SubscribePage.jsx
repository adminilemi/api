import { useState } from 'react';
import HeroPageReUseable from "../Components/Re-useable-components/HeroPageReUseable"
import Header from "../Components/main-components/Header"
import './SubscribeForm.css'
import Footer from '../Components/main-components/Footer';
import ReusableButton from '../Components/Re-useable-components/ReuseableButton';
import addressImage from '../assets/images/AddressImage.svg'
import phoneImage from '../assets/images/PhoneImage.svg'
import emailImage from '../assets/images/EmailImage.svg'

function SubscribePage(){
  
    return (
      <>
        <div className='subscribe-page-main-div'>
            <Header/>
            <HeroPageReUseable text='Subscribe Form' />
            <Form/>
            <ContactInformation/>
        </div>
            <Footer/>
      </>
    )
}


const ContactInformation= ()=>{
  return   <div>
  <p className='form-footer-intro'>For more information reach out to us via: </p>
  <div className='info-section'>

    <div className='info'>
        <img src={addressImage} className="info-image" alt="logo" />
     <p className='info-text-paragraph'>ADDRESS<br/>
      <span>16 Olujobi Street, Gbagada Shomolu, Lagos Nigeria</span> 
      </p>
    </div>

    <div className='info'>
     
        <img src={phoneImage} className="info-image" alt="logo" />
    
      <p className='info-text-paragraph'>
      PHONE<br/>
      <span>+234 802 304 1037</span> 
      </p>
    </div>

    <div className='info'>
  
      <img src={emailImage} className="info-image" alt="logo" />
    
      <p className='info-text-paragraph'>
      EMAIL<br/>
      <span>contact@ile-mi.ng</span> 
      </p>
      </div>
    
  </div>
</div>

  
}

function Form() {
    const [person, setPerson] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        category : ''
      });

      const handleSend =()=>{
    
      }

   function handleFullNameChange(e) {
    setPerson({
      ...person,
      fullName: e.target.value
    });
  }

  function handleEmailChange(e) {
        setPerson({
          ...person,
          email: e.target.value
        });
  }
  function handlePhoneNumberChange(e) {
    setPerson({
      ...person,
      phoneNumber: e.target.value
    });

}
function handlePhoneNumberChange(e) {
    setPerson({
      ...person,
      phoneNumber: e.target.value
    });

}


  return (
    <div className='form-main-div'>
        <h3 className='form-heading'>Let's get your <span>Details</span> </h3>
        <p className='form-sub-heading'>Be among the first Agent, Landlord or Tenant to know when we go live!</p>
      <label>
        
        <input
        placeholder='Full name'
          value={person.fullName}
          onChange={handleFullNameChange}
        />
      </label>
     
      <label>
        <input
        placeholder='Email'
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <label>
        <input
        placeholder='Phone Number'
          value={person.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>
      <Select/>
      <div className='Send-buttons'>
                    <ReusableButton 
                    text={"SEND"} 
                    onClick={handleSend}  maxWidth="58vw" width="60%" height="45px" backgroundColor={'#5F259F'} fontWeight={700}/>
                </div>
    </div>
  );
}
function Select() {
    const [selectedFruit, setSelectedFruit] = useState('select a category'); ; // Declare a state variable...
    // ...
    return (
        <select
        value={selectedFruit} // ...force the select's value to match the state variable...
        onChange={e => setSelectedFruit(e.target.value)} // ... and update the state variable on any change!
      >
        <option value="LandLord">Landlord</option>
        <option value="Agent">Agent</option>
        <option value="Tenant">Tenant</option>
        <option value="Advertiser">Advertiser</option>
      </select>
    );
  }

export default SubscribePage