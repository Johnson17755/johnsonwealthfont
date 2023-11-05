import React from 'react';
import notif from '../../assets/logo/notif-app-icon.contenthash.a0055c62e05910f6152abcecfb75d6cc0e39a909.svg';
import { Link } from 'react-router-dom';
import vanlife from '../../assets/logo/vanlife.contenthash.1a2473e3a801186e41d5f34a78ff67e1e92c81c2.jpg';
import animal from '../../assets/logo/animal_2.svg';

function Section4() {
  return (
    <>
        <div data-testid="automation-module" className="mx-auto mt-32 grid max-w-[2024px] items-center gap-x-8 text-eggplant sm:mt-12 lg:grid-cols-4">
            <div className="relative col-span-2 flex items-center lg:max-h-[747px] lg:justify-center">
                <div className="relative w-full lg:h-auto">
                    <div className="aspect-5/4 lg:aspect-4/3 sm:max-w-1/2 relative mb-8 min-h-[284px] max-w-[80%] sm:max-w-[60%] lg:mb-0 lg:min-h-[334px] lg:max-w-none">
                        <div className="absolute inset-0">
                            <div className='back' data-testid="marketing-video-observer">
                            <img width="752" height="752" alt="icon" loading="eager" src={vanlife}/>
                            </div>
                            <div className="copy-disclosure mx-auto mt-4 max-w-[550px] pl-8 2xl:pl-0">Tax Loss Harvesting benefits will vary. Wealthfront doesn’t provide tax advice.</div>
                        </div>
                    </div>
                    <div className="absolute left-auto right-0 top-1/2 flex w-72 origin-top-right -translate-x-4 -translate-y-1/2 scale-75 transform flex-col items-end xs:scale-100 sm:left-1/2 sm:translate-x-0 sm:items-start lg:left-full lg:-translate-x-3/4 xl:left-[calc(100%-8rem)] xl:-translate-x-1/4 2xl:left-[calc(100%-8rem)] 3xl:left-[calc(100%-10rem)]">
                        <div>
                            <div className="filter-shadow  space-y-2 rounded-xl bg-[rgba(255,255,255,0.85)] p-3 pb-5 leading-4 2xl:space-y-4 w-[288px] 2xl:w-[375px] 3xl:w-[420px]">
                                <div className="text-indigo flex justify-between text-[12px] 2xl:text-[14px] 3xl:text-[17px]">
                                    <div className="uppercase">
                                        <div className="flex items-center space-x-1">
                                            <img className="" width="21" height="21" alt="icon" loading="eager" src={notif}/>
                                            <span>Wealthfront</span>
                                        </div>
                                    </div>
                                    <div>now</div>
                                </div>
                                <div className="text-[16px] leading-none lg:text-[18px] 2xl:text-[23px]">We saved you $78.11 on your taxes.</div>
                            </div>
                        </div>
                        <div className="relative left-0 top-2 sm:top-8 2xl:-left-12">
                            <div className="filter-shadow  space-y-2 rounded-xl bg-[rgba(255,255,255,0.85)] p-3 pb-5 leading-4 2xl:space-y-4 w-[250px] 2xl:w-[340px] 3xl:w-[400px]">
                                <div className="text-indigo flex justify-between text-[12px] 2xl:text-[14px] 3xl:text-[17px]">
                                    <div className="uppercase">
                                        <div className="flex items-center space-x-1">
                                            <img width="21" height="21" alt="" loading="eager" src={notif}/>
                                            <span>Wealthfront</span>
                                        </div>
                                    </div>
                                    <div>now</div>
                                </div>
                                <div className="text-[16px] leading-none lg:text-[18px] 2xl:text-[23px]">We automatically invested your $500 deposit.</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col-span-2 px-0 py-12 lg:py-0 xl:pl-48">
            <div className="order-last w-auto space-y-4 justify-self-center px-8 lg:order-first lg:justify-self-end lg:px-16 xl:w-96 xl:px-0 2xl:w-[500px]">
                <div className="space-y-8 lg:space-y-10 2xl:space-y-12 3xl:space-y-16">
                    <div className="space-y-4">
                        <h2 className="copy-h1-alt">
                            Our not-so-secret ingredient? <i>Automation✨</i>
                        </h2>
                    </div>
                    <div className="space-y-4">
                        <div className="copy-body lg:w-[300px] 2xl:w-[334px] 3xl:w-[400px]">Keep your eyes on the big picture, your other investments, or basically anything besides the busywork. We rebalance your portfolio, automatically diversify deposits, and can help save you taxes, all without you ever lifting a finger.</div>
                    </div>
                    <div className="flex flex-row md:items-center lg:space-x-8">
                        <Link className="z-10 relative button_button__SRc2Y  items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__ipohF bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap" to="/">Get started</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="mx-auto w-full max-w-[2024px] space-y-3 px-8 pt-44 md:px-12 md:pt-0 lg:px-16 lg:pt-32">
            <div data-testid="tlh-module" className="relative flex flex-col items-center text-center">
                <h2 className="copy-h1-alt ">Let your taxes pay you for a change.</h2>
                <div className="copy-body max-w-[360px] py-8 md:max-w-[420px] lg:max-w-[560px] xl:max-w-[700px]">
                    <p className="font-bold">Tax-Loss Harvesting can find many small wins to boost your after-tax returns.</p>
                    <p>Our software monitors your investments to automatically trade similar assets that lose value, which can help you lower your tax bill while still keeping your portfolio on track. When you offset your capital gains by claiming many small losses, you can put the savings right back to work in the market. No tractors or shovels required.</p>
                </div>
                <Link aria-label="Learn more about Tax-Loss Harvesting" className="z-10 button_button__SRc2Y relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_secondaryButtonOnLight__tcBIH border border-blurple text-blurple inline-flex whitespace-nowrap mb-4" to="/" rel="noopener noreferrer" target="_blank">Learn more</Link>
                <div className="animate-float pointer-events-none absolute -right-8 bottom-full h-[302px] w-[302px] sm:h-[250px] sm:w-[250px] md:-right-12 md:bottom-[0%] lg:-bottom-10 lg:-right-16 lg:h-[302px] lg:w-[302px] xl:h-[302px] xl:w-[302px] 2xl:h-[431px] 2xl:w-[431px] 3xl:right-14">
                    <picture>
                        <source type="image/webp" srcSet={animal}/>
                        <img className="object-cover min-w-full lg:h-full w-auto" width="431" height="431" alt="" loading="lazy" src={animal}/>
                    </picture>
                </div>
            </div>
        </div>
    </>
  )
};

export default Section4;