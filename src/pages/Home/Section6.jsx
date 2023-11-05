import React from 'react';
import { Link } from 'react-router-dom';
import truck from '../../assets/logo/truck.png';
import nest from '../../assets/logo/nestegg.png';

function Section6() {
  return (
    <>
        <div data-testid="clients-module" className="relative bg-[#e3d0cf] px-4 pt-16 text-eggplant md:px-0 md:pt-48 xl:pt-12">
            <div className="pointer-events-none absolute -top-[100px] left-[70px] z-10 w-[300px] translate-y-0 transform sm:left-1/2 sm:-translate-x-1/2 md:top-[180px] md:-translate-y-3/4 xl:bottom-0 xl:left-auto xl:top-auto xl:w-auto xl:translate-x-[-10%] xl:translate-y-1/4 2xl:translate-x-0">
                <picture>
                    <source type="image" srcSet={nest}/>
                    <img width="401" height="401" alt="" loading="lazy" src={nest}/>
                </picture>
            </div>
            <div className="mx-auto flex w-full max-w-[520px] flex-col px-4 pb-12 pt-36 md:pb-36 md:pt-10 lg:w-[722px] lg:max-w-none lg:px-0 2xl:w-[904px] 3xl:w-[985px]">
                <p className="copy-h2-alt border-b border-eggplant pb-4">You can count on us</p>
                <p className="copy-h1 border-b border-eggplant py-4">
                    $43Billion 
                <span className="copy-h1-alt">managed for clients</span>
                </p>
                <p className="copy-h1-alt border-b border-eggplant py-4">
                    <span className="copy-h1">0%</span>
                    of your trade data sold
                </p>
                <div className="border-b border-eggplant pb-4">
                    <p className="copy-h1 py-4">
                        $500,000 <span className="copy-h1-alt">protected by SIPC</span>
                    </p>
                    <div className="copy-body-sm">includes $250,000 cash limit</div>
                </div>
            </div>
        </div>
        <div>
            <div className="relative w-full bg-light-slate">
                <div className="mx-auto grid grid-cols-1 items-center lg:grid-cols-2">
                    <div className="order-last w-full space-y-4 justify-self-center px-8 py-12 text-eggplant lg:order-first lg:justify-self-end xl:py-32 2xl:mr-32 2xl:w-[500px] 2xl:px-0 3xl:py-48">
                        <div className="space-y-8 lg:space-y-10 2xl:space-y-12 3xl:space-y-16">
                            <div className="space-y-4">
                                <h2 className="copy-h1-alt">We’re here if you need us</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="copy-body">You can do everything you need right in our app. But sometimes, it’s just easier to talk to a person. That’s why we have a gaggle of certified CPAs, CFAs, and CFPs standing by to answer your questions.</div>
                            </div>
                            <div className="flex flex-row md:items-center lg:space-x-8">
                                <Link className="z-10 relative font-medium underline text-eggplant" to="/" rel="noopener noreferrer" target="/">Learn more about our Product Specialists</Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full lg:h-full lg:max-h-[720px] 2xl:w-auto 3xl:max-h-[860px]">
                        <picture>
                            <source type="image/webp" srcSet={truck}/>
                            <img className="object-cover min-w-full lg:h-full w-auto" width="871" height="610" alt="" loading="lazy" src={truck}/>
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default Section6;