import logo from '../../assets/images/Th-logo.svg';

import './Footer.css';

function Footer() {
  return (
    <footer className=''>
      <section className='container py-4 px-3 d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <figure>
          <img src={logo} className='thistle-tech-logo' alt='logo' />
        </figure>
        <div>
          <p className='all-rights-reserved text-md-end text-center my-4 my-md-0'>
            © 2023 Thesile Technologies All rights reserved
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
