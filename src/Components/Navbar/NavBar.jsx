'use client';

import React, { useState } from 'react';

// styles
import './NavBar.scss';

// images
import Logo from '../../assets/images/Th-logo.svg';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (id) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  const linkList = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About Us', url: '/about' },
    { id: 3, title: 'Contact', url: '/contact' },
  ];

  return (
    <div>
      <section className='navContainer container'>
        <nav className='d-flex  flex-row align-items-center justify-content-between'>
          {/* Logo */}
          <NavLink
            to='/'
            className='col-8 col-md-4 col-lg-2 d-flex flex-row align-items-center  logo'
            // data-aos='zoom-in'
            // data-aos-duration='1500'
          >
            <img src={Logo} alt=' Ile-Mi Logo' />
          </NavLink>
          <div
            className={` col-12 col-lg-10 d-flex flex-column flex-lg-row ${
              toggle['navbar'] ? 'navMove' : 'displayNav'
            }`}
          >
            <aside className='col-12 d-flex flex-column flex-lg-row  align-items-center justify-content-center justify-content-lg-between '>
              {/* nav Links */}
              <section className='col-12 d-flex align-items-center justify-content-between  '>
                <ul
                  // data-aos='fade-right'
                  // data-aos-duration='1500'
                  className='navItems d-flex flex-column flex-lg-row  col-12 justify-content-end align-items-center gap-5'
                >
                  <li className='d-flex flex-column flex-lg-row col-12 col-lg-4 text-enter text-lg-end justify-content-between'>
                    {linkList.map(({ id, title, url }) => (
                      <NavLink
                        key={id}
                        to={url}
                        className={({ isActive }) =>
                          isActive ? 'isActive' : 'notActive'
                        }
                        onClick={() => handleToggle('navbar')}
                      >
                        {title}
                      </NavLink>
                    ))}
                  </li>
                  <li className='d-flex justify-content-center justify-content-lg-end col-12 col-lg-3'>
                    <button
                      className='main-btn'
                      type='button'
                      data-aos='fade-left'
                    >
                      JOIN OUR WAITING LIST
                    </button>
                  </li>
                </ul>
              </section>
            </aside>
          </div>
          {/* Hambuger icon */}
          <div
            onClick={() => handleToggle('navbar')}
            className={toggle['navbar'] ? 'open' : 'ham'}
            id='navbar'
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default NavBar;
