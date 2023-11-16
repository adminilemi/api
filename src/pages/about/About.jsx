import Footer from "../../Components/main-components/Footer";
import Header from "../../Components/main-components/Header";
import everyOneImage from '../../assets/images/sittingRoomImage.svg';
import craftiingImage from '../../assets/images/familyAndGroundBuilding.svg'
import creatingChangeImage from '../../assets/images/familyImage.svg'
import "./about.css"

function About(){
    return(
        <>
             <div>
            <Header/>
            <div className='hero-section-about-us'>
                <h1>Revolutionizing real estate for seamless transitions between properties, making the process easier than ever before.</h1>
            </div>
            <div className="everyone-deserves-main-div">
                <img src = {everyOneImage} alt= "" />
                <div className="everyone-right-text-div">
                    <h3>Everyone deserves a home they love!</h3>
                    <p>Aplace of comfort, belonging, and joy. We strive to make the dream of finding that perfect home a reality for everyone.
                    At the core of this belief is the understanding that home is more than just a physical space; it's a haven where memories are created, dreams take root, and life unfolds. Regardless of background or circumstance, the right to a home that resonates with one's heart is a fundamental human need. It's a place where individuals find solace, belonging, and the freedom to express their unique identity. Creating spaces that inspire love and joy contributes to a richer, more inclusive world for all.</p>
                </div>
            </div>
            <div className="crafting-div">
                <div className="crafting-left-text">
                    <h3>Crafting a transactional journey without friction.</h3>
                    <p>Our real estate experience is designed to eliminate hurdles and make every step effortless for you.</p>
                </div>
                <img src ={craftiingImage} alt= "" />
            </div>
            <div className="creating-change">
              
                <img src ={creatingChangeImage } alt= "happy family" />
                <div className="creating-change-text-div">
                    <h3>Creating change in our communities.</h3>
                    <p>We hold the belief that homes are fundamental to life. Utilizing our platform and influence in the housing sector, we initiate discussions and take action on crucial issues, contributing to community welfare.</p>
                    <h3 className='creating-change-second-h3'>Join us as we work to replatform real estate.</h3>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}
export default About;