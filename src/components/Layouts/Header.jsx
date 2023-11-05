import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from "react-icons/fa";

import Logo from '../../assets/logo/companyLogo.svg';
import Hamburger from '../../assets/logo/hamburger.contenthash.8361a668629c64dbc61ef8ad2c464b80fabee143.svg';
import Burger from '../../assets/logo/hamburger.contenthash.8361a668629c64dbc61ef8ad2c464b80fabee143.svg';
import Hamburger1 from '../../assets/logo/wordmark-surface-dynamic.contenthash.d9e2432c7c6d88eabff40bd4374f8be7a9522262.svg';
import Hans from '../../assets/logo/wordmark-surface-light.contenthash.a8692bc90191152aab2540310597006576ffb65d.svg';

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prevMobileMenuOpen) => !prevMobileMenuOpen);
    };

    // useEffect(() => {
    //     console.log("Mobile menu state:", isMobileMenuOpen);
    // }, [isMobileMenuOpen]);

  return (
    <>
    <div id="__next" data-reactroot="header">
       <div data-testid="menu">
            <div className="hidden lg:block">
                <div className="mx-auto max-w-[2024px] px-0 md:px-12 lg:px-16">
                    <div className="grid h-24 grid-cols-header items-center justify-between">
                        <Link  className="z-10 relative font-medium underline text-eggplant" to="/">
                            <img className='text-3xl font-bold  md:text-eggplant' width="200" height="26" data-testid="logo-light-wordmark" alt="Wealthfront Logo" loading="eager" src={Logo}/>
                        </Link>
                        <nav className="flex items-center space-x-8 xl:space-x-12" aria-label="">
                            <Link  to="/" className="group relative font-medium text-eggplant" data-testid="/">
                                Cash<div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all group-hover:w-full bg-eggplant"></div>
                            </Link>
                            <Link  to="/" className="group relative font-medium text-eggplant" data-testid="/">
                                Bonds<div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all group-hover:w-full bg-eggplant"></div>
                            </Link>
                            <Link role="button" to="/" className="group relative font-medium text-eggplant">
                                Automated Investing
                                <svg fill="none" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" data-testid="chevron-down" className="inline h-1.5">
                                    <path d="M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all group-hover:w-full bg-eggplant"></div>
                            </Link>
                            <Link to="/" className="group relative font-medium text-eggplant" data-testid="/">
                                Stocks<div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all group-hover:w-full bg-eggplant"></div>
                            </Link>
                            <Link role="button" to="/" className="group relative font-medium text-eggplant">
                                Learn
                                <svg fill="none" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" data-testid="chevron-down" className="inline h-1.5">
                                    <path d="M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all group-hover:w-full bg-eggplant"></div>
                            </Link>
                        </nav>
                        <div className="flex items-center justify-end space-x-3">
                            <Link className="z-10 button_button__SRc2Y relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_secondaryButtonOnLight__tcBIH border border-blurple text-blurple inline-flex whitespace-nowrap group" to="/" data-testid="logged-out-header-login">
                                <div className="group-hover:text-gradient block group-hover:bg-gradient-to-b group-hover:from-blurple group-hover:to-caracara">Log in</div>
                            </Link>
                            <Link className="z-10 button_button__SRc2Y relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__ipohF bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap" to="/" data-testid="logged-out-header-signup">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 hidden px-0 md:block md:px-12 lg:hidden lg:px-16">
                <div className="absolute left-0 right-0 flex items-center justify-between px-6 py-6 md:static md:px-0">
                    <Link  className="z-10 relative font-medium underline text-eggplant" to="/">
                        <img className="text-3xl font-bold md:text-eggplant" width="200" height="26" data-testid="logo-light-wordmark" alt="Wealthfront Logo" loading="eager" src={Hans}/>
                    </Link>
                    <button type="button" onClick={toggleMobileMenu}>
                        <img width="30" height="23" alt="Open navigation menu" loading="eager" src={Hamburger}/>
                    </button>
                </div>
            </div>
            <div className="relative z-10 block md:hidden">
                <div className="absolute left-0 right-0 flex items-center justify-between px-4 py-6 ">
                    <Link  className="z-10 relative font-medium underline text-eggplant" to="/">
                        <img className="text-3xl font-bold text-white md:text-eggplant" width="200" height="26" data-testid="logo-dynamic-wordmark" alt="Wealthfront Logo" loading="eager" src={Hamburger1}/>
                    </Link>
                    <button type="button" data-testid="logged-out-mobile-header-hamburger" onClick={toggleMobileMenu}>
                        <img className='fill: bg-[#230b59]' width="30" height="23" alt="Open navigation menu" loading="eager" src={Burger}/>
                    </button>
                </div>
            </div> 
            {isMobileMenuOpen && (
                      <div className="md:hidden">
                      <div className=' block px-3 py-2 rounded-md text-base font-medium align-middle text-center'>
                      <Link className='block px-3 py-2 rounded-md text-base  align-middle text-center' to="/Cash">Cash</Link>
                      <Link className='block px-3 py-2 rounded-md text-base align-middle text-center' to="/Bonds">Bonds</Link>
                      <Link className='block px-3 py-2 rounded-md text-base align-middle text-center' to="/Automated Investing">Automated Investing</Link>
                      <Link className='block px-3 py-2 rounded-md text-base align-middle text-center' to="/Stock">Stocks</Link>
                      <Link className='block px-3 py-2 rounded-md text-base align-middle text-center' to="/Learn">Learn</Link>
                      <Link className='block px-3 py-2 rounded-md text-base align-middle text-center' to="/Log in">Log in</Link>
                      <Link className='block px-3 py-2 rounded-md text-base align-middle text-center' to="/Get Started">Get Started</Link>
                      </div>
                  </div>
                    )}  
        </div>
    </div>
    </>
  );
};

export default Header;