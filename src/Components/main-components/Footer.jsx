import logo from '../../assets/images/Th-logo.svg'

import './Footer.css'

function Footer() {

    return(
        <div className='footer-div'>
            <div>
                <img src={logo} className="thistle-tech-logo" alt="logo" />
            </div>
            <div>
                <p className='all-rights-reserved'>© 2023 Thesile Technologies  All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer