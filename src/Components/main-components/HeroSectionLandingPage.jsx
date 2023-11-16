import './HeroSectionLandingPage.css'
import bigCard from "../../assets/images/BigCard.svg";
import smallCard from "../../assets/images/card.svg";
import ReusableButton from '../Re-useable-components/ReuseableButton';
import {useNavigate} from "react-router-dom"

function HeroSectionLandingPage(){
  const navigate = useNavigate()
    const joinOurWaitingListButton =()=>{
        navigate('/join-form')
    }
return (
    <div className="landing-top-main-div">
    
        <div className="left-side-div">
            <div className='topmost'>
            <h1 className='prominent-text'>Buy, rent, or sell<br/> your property<br/> easily</h1>
            <p>A great platform to buy, sell, or even rent your<br/> properties without any commissions.</p>
            </div>
           <div className='lower-part'>
           <p className='p-with-color'>No Spam Promise</p><br/>

            <h2 className=''>Are you a landlord?</h2> 
            <p>Discover ways to increase your home value and get listed  No Spam</p><br/>
            <div className='input-div'>
              <ReusableButton
                text={"JOIN OUR WAIT LIST"} 
                    onClick={joinOurWaitingListButton}  maxWidth="34vw" width="100%" height="45px" backgroundColor={'#5F259F'}
              />
            <p>Join 10,000+other landlords in our Ile-Mi Waiting List</p>
            </div>
            

           </div>
            
        </div>
      <div className="right-side-div">
        <img className='image1' src={bigCard} alt=''/>
        <img className='image2' src={smallCard} alt=''/>
      </div>
    </div>
)
}

export default HeroSectionLandingPage;