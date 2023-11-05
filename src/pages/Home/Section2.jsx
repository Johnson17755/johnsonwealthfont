import React from 'react';
import question from '../../assets/logo/question_mark_circle.contenthash.24da3cb67219d581ee83d390c8d6017e8e3fc61a.svg';
import { Link } from 'react-router-dom';


function Section2() {
  return (
    <>
        <div data-testid="portfolio-module" className="mt-16 grid grid-cols-1 lg:grid-cols-60/40">
            <div className="relative flex w-full items-center justify-center bg-eggplant px-8 py-16">
                <div className="absolute top-0 left-0 right-0 flex -translate-y-1/2 transform justify-center">
                    <div className="flex-basis-0 md:flex-basis-auto w-[683px] flex-shrink-0 flex-grow-0 md:w-[300px]">
                        <div className="w-[310px] space-y-4 rounded-lg bg-white p-6 xs:w-[345px] md:w-[448px]">
                            <div className="flex justify-between">
                                <div className="copy-body font-bold" aria-atomic="true" aria-live="polite">Risk score: 
                                
                                8.0</div>
                                <div className="copy-body-sm">Example portfolio</div>
                            </div>
                            <div style={{ transform: 'scale(1)', cursor: 'pointer' }} className="h-1.5 w-full rounded-full bg-gradient-to-r from-ambient-orange to-lavender">
                                 <div style={{ position: 'absolute', zIndex: 0, cursor: 'grab', userSelect: 'none', touchAction: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }} tabIndex="0" aria-valuemax="10" aria-valuemin="0.5" aria-valuenow="8" draggable="false" role="slider" aria-label="Drag to select portfolio score" className="h-6 w-6 rounded-full border-[1px] border-eggplant border-opacity-20 bg-white shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-atomic="true" aria-live="polite" className="w-full max-w-[683px] space-y-4">
                    <div className="grid grid-cols-12 text-white" style={{maxAllocation:0.45}}>
                        <div className="col-span-5 flex items-center pr-4 md:col-span-4">
                            <span className="truncate overflow-ellipsis">US Stocks</span>
                            <button className="ml-2" aria-label="Open US Stocks dialog" type="button">
                                <img width="24" height="24" alt="More information" loading="lazy" src={question}/>
                            </button>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8">
                            <div className="w-8 min-w-[64px] border border-lavender px-4 py-2 text-white transition" style={{ width: `calc((0.45 / var(--max-allocation)) * 100%)`, backgroundColor: '#230B59' }}>
                            45% 
                            </div>
                        </div>
                        <div className="col-span-5 flex items-center pr-4 md:col-span-4">
                            <span className="truncate overflow-ellipsis">Foreign Stocks</span>
                            <button className="ml-2" aria-label="Open Foreign Stocks dialog" type="button">
                                <img width="24" height="24" alt="More information" loading="lazy" src={question}/>
                            </button>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8">
                            <div className="w-8 min-w-[64px] border border-lavender px-4 py-2 text-white transition" style={{width:`calc((0.15 / var(--max-allocation)) * 100%)`,backgroundColor:'#4840BB'}}>
                            15%
                            </div>
                        </div>
                        <div className="col-span-5 flex items-center pr-4 md:col-span-4">
                            <span className="truncate overflow-ellipsis">Emerging Markets</span>
                            <button className="ml-2" aria-label="Open Emerging Markets dialog" type="button">
                                <img width="24" height="24" alt="More information" loading="lazy" src={question}/>
                            </button>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8">
                            <div className="w-8 min-w-[64px] border border-lavender px-4 py-2 text-white transition" style={{width:`calc((0.15 / var(--max-allocation)) * 100%)`,backgroundColor:'#4D5898'}}>
                            15%
                            </div>
                        </div>
                        <div className="col-span-5 flex items-center pr-4 md:col-span-4">
                            <span className="truncate overflow-ellipsis">Dividend Stocks</span>
                            <button className="ml-2" aria-label="Open Dividend Stocks dialog" type="button">
                                <img width="24" height="24" alt="More information" loading="lazy" src={question}/>
                            </button>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8">
                            <div className="w-8 min-w-[64px] border border-lavender px-4 py-2 text-white transition" style={{width:`calc((0.09 / var(--max-allocation)) * 100%)`,backgroundColor:'#7086C9'}}>9%</div>
                        </div>
                        <div className="col-span-5 flex items-center pr-4 md:col-span-4">
                            <span className="truncate overflow-ellipsis">Municipal Bonds</span>
                            <button className="ml-2" aria-label="Open Municipal Bonds dialog" type="button">
                                <img width="24" height="24" alt="More information" loading="lazy" src={question}/>
                            </button>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8">
                            <div className="w-8 min-w-[64px] border border-lavender px-4 py-2 text-white transition" style={{width:`calc((0.16 / var(--max-allocation)) * 100%)`,backgroundColor:'#BDC6F5'}}>16
                            %</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-between gap-x-4 text-steel xl:grid-cols-3">
                        <div className="col-span-1 flex justify-between space-x-2">
                            <div>Real Estate</div>
                            <div>0%</div>
                        </div>
                        <div className="col-span-1 flex justify-between space-x-2">
                            <div>US Bonds</div>
                            <div>0%</div>
                        </div>
                        <div className="col-span-1 flex justify-between space-x-2">
                            <div>Corporate Bonds</div>
                            <div>0%</div>
                        </div>
                        <div className="col-span-1 flex justify-between space-x-2">
                            <div>TIPS</div>
                            <div>0%</div>
                        </div>
                        <div className="col-span-1 flex justify-between space-x-2">
                            <div>Emerging Markets Bonds</div>
                            <div>0%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start pt-8 text-eggplant sm:py-10 lg:pl-8">
                <div className="order-last w-auto space-y-4 justify-self-center px-8 md:px-12 lg:order-first lg:justify-self-end lg:px-6 xl:w-96 2xl:w-[500px]">
                    <div className="space-y-8 lg:space-y-10 2xl:space-y-12 3xl:space-y-16">
                        <div className="space-y-4">
                            <h2 className="copy-h1-alt">Smarter investing, brilliantly personalized.</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="copy-body lg:w-[300px] 2xl:w-[334px] 3xl:w-[420px]">Just answer a few questions, and we’ll build you a personalized portfolio of low-cost index funds from up to 17 global asset classes. Our software handles all the trading, rebalancing, and other busywork to help grow your wealth for the long term.</p>
                        </div>
                        <div className="flex flex-row md:items-center lg:space-x-8">
                            <Link className="z-10 relative button_button__SRc2Y items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__ipohF bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap" to="/">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-7 pt-12 md:px-12 lg:px-16 2xl:px-0">
            <Link className="z-10  relative mx-auto flex h-[94px] w-full max-w-[1445px] origin-center transform cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-4 border-transparent transition-all hover:scale-[101%] hover:border-peach" to="/">
                <picture>
                    {/* <source type="image/webp" srcSet=""/> */}
                    {/* <img className="absolute w-full h-full inset-0 object-cover" width="1445" height="94" alt="" loading="lazy" src=""/> */}
                </picture>
                <div className="banner_banner__1GntM absolute h-full w-full"></div>
                <div className="xs:copy-h2 relative z-20 py-2 px-3 text-center font-sans text-[26px] font-bold leading-[26px] tracking-tighter text-white sm:px-6">
                    What level of risk suits you best?
                    <span className="copy-h2-alt">➳</span>
                </div>
            </Link>
        </div>
    </>
  )
};

export default Section2;