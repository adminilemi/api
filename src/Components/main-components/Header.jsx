import logo from '../../assets/images/Th-logo.svg'
import ReusableButton from '../Re-useable-components/ReuseableButton'
import './header.css'
import { Link,useNavigate} from 'react-router-dom';
function Header(){
    
    const navigate = useNavigate()
    const joinOurWaitingListButton =()=>{
        navigate('/join-form')
    }
    
    return (
        
         <div className='header-main-div'>
            <div className="logo">
                <img src={logo} className="thistle-tech-logo" alt="logo" />
            </div>
            <div className='header-buttons'>
            <div className='nav-links'>
                
                    <li><Link to="/about" className='menu-link'>About us</Link></li>
                    <li><Link to="/contact" className='menu-link'>Contact</Link></li>
              

                
            </div>
            <div className='join-btn'>
                    <ReusableButton 
                    text={"JOIN OUR WAIT LIST"} 
                    onClick={joinOurWaitingListButton}  maxWidth="34vw" width="15vw" height="45px" backgroundColor={'#5F259F'} />
                </div>
                {/* <div>
                    <ReusableButton 
                    text={"About us"} 
                    onClick={joinOurWaitingListButton}  maxWidth="72px" width="100%" height="42px" backgroundColor={'#FFFFFF'} color={'#000000'}/>
                </div>
              
                <div className=''>
                    <ReusableButton
                    text={"Contact"} 
                    onClick={joinOurWaitingListButton}  maxWidth="72px" width="100%" height="42px" backgroundColor={'#FFFFFF'} color={'#000000'}/>
                    
                </div> */}
               
              

            </div>
             
            </div>
      
        
    )
}

export default Header;