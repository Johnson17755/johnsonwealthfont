import React from 'react';
import { Link } from 'react-router-dom';
// import phone from '../../assets/logo/';


function Section3() {
  return (
    <>
        <div data-testid="explore-module" className="relative mx-auto grid max-w-[1445px] grid-cols-1 items-center gap-x-16 px-7 pt-8 md:pl-12 md:pr-0 lg:grid-cols-5 lg:px-16 xl:pt-32 2xl:px-0 2xl:pt-10">
             <div className="flex-2 order-last -mt-5 max-w-[500px] text-eggplant md:mt-0 md:pt-10 lg:order-first lg:col-span-2 lg:pt-0 2xl:max-w-[600px]">
                 <div className="space-y-8 lg:space-y-10 2xl:space-y-12 3xl:space-y-16">
                     <div className="space-y-4">
                         <h2 className="copy-h1-alt">You make it custom. We’ll do the rest.</h2>
                     </div>
                     <div className="space-y-4">
                         <div className="copy-body max-w-[420px]">
                             Choose from hundreds of funds in categories like clean energy, tech, and crypto and we’ll handle the trades and rebalance your portfolio for you. Or start with a portfolio designed around your values with our
                             <Link className="z-10 relative font-medium underline text-eggplant" to="/">Socially Responsible portfolio</Link>
                             . We make it easy and safe to customize by helping you see when your choices won’t be in line with your preferred risk level.
                         </div>
                     </div>
                     <div className="flex flex-row md:items-center lg:space-x-8">
                         <Link className="z-10 button_button__SRc2Y relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__ipohF bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap" to="">Get started</Link>
                     </div>
                 </div>
             </div>
             <div className="-ml-7 -mr-7 flex flex-col overflow-hidden sm:ml-0 sm:mr-0 lg:col-span-3 lg:overflow-visible">
                 <div className="mask-fade md:mask-none relative ml-0 h-full w-full min-w-[450px] md:h-[600px] lg:ml-[-80px] xl:ml-[-105px] 2xl:ml-[-140px] 2xl:h-[950px]" style={{wfFadeStop:'25%', wfFadestart:'32%', opacity:0, transform:'translateY(50px) translateZ(0)'}} aria-hidden="true">
                     <div style={{width:'100%',height:'100%'}}></div>
                 </div>
                 <div aria-hidden="true" style={{opacity:0, transform:'translateY(50px) translateZ(0)'}}>
                     <p className="copy-disclosure -mt-24 block px-8 text-center sm:-mt-32 md:hidden">Securities shown are for illustrative purposes only, and are not a recommendation to buy or hold.</p>
                 </div>
             </div>
             <div className="absolute -bottom-24 right-0 h-[200px] w-[200px] sm:bottom-8 md:right-8 xl:h-[294px] xl:w-[294px]" >
                 {/* <picture>
                     <img width="294" height="294" alt="" loading="lazy" src={phone}/>
                 </picture> */}
             </div>
        </div>
    </>
  )
};

export default Section3;