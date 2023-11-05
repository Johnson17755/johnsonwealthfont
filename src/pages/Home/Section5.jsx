import React from 'react'
import { Link } from 'react-router-dom';

function Section5() {
  return (
    <>
        <div data-testid="pricing-module" className="mt-4 flex w-full flex-col items-center bg-[#505CA6] px-8 pb-44 pt-16 text-center text-lavender md:pb-28 md:pt-20 lg:mt-16">
            <h2 className="copy-h1-alt">
                Our fee is small, <br/>
                <span className="copy-h1-alt italic">but we think it’s a really big deal.</span>
            </h2>
            <div className="copy-h1 mb-4 mt-2 text-[100px] lg:text-[113px]">0.25%</div>
                <span className="copy-body mb-5 table-cell max-w-[515px] lg:mb-8">
                    For just 0.25% a year, Automated Investing Account clients get all the benefits of always-on automation, expert-curated portfolios, and Tax-Loss Harvesting that typically covers our fee more than 11x over.
                    <button aria-label="open how Tax-Loss Harvesting covers our fee dialog" className="mb-1 align-middle" type="button">
                        <svg viewBox="0 0 24 24" fill="currentColor" role="presentation" className="inline-block h-[1.2em] align-[-0.25em] w-[24px]" data-toolkit-component="Icon">
                            <path d="M10.748 10.798h.017c.422 0 .765.343.765.765v2.381a1 1 0 01-1 1h-.285a.745.745 0 000 1.49h4.01a.745.745 0 100-1.49H14a1 1 0 01-1-1v-3.642a1 1 0 00-1-1h-1.252a.748.748 0 000 1.496zm.223-2.927a.965.965 0 00.547.507c.132.05.277.073.435.073.325 0 .583-.09.772-.27a.935.935 0 00.29-.705.913.913 0 00-.29-.699c-.19-.185-.447-.277-.772-.277a1.255 1.255 0 00-.435.073 1.029 1.029 0 00-.33.198.934.934 0 00-.29.705c0 .14.024.272.073.395zM21 12a9 9 0 11-18 0 9 9 0 0118 0zm-1.5 0a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0z"></path>
                        </svg>
                    </button>
                </span>
                <Link className="z-10  button_button__SRc2Y relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_secondaryButtonOnDark__7qK6q hover:border-transparent border border-lavender text-lavender inline-flex whitespace-nowrap investing_button__QBcwY" to="/">See how much it costs</Link>
            </div>
            <div data-testid="info-module" className="bg-[#F7E9E2] pb-28 text-eggplant">
                <div className="container relative mx-auto px-8 text-eggplant md:px-12 lg:px-16">
                    <div className="flex flex-col pt-24">
                        <div className="mb-4 flex items-center justify-between border-b border-eggplant xl:mb-12">
                            <h2 className="copy-h1-alt pb-4 md:w-1/2 md:px-0 lg:w-2/3 xl:pb-12">Investing that accounts for your needs.</h2>
                            <div className="pointer-events-none absolute left-1/2 w-[283px] -translate-x-1/2 -translate-y-3/4 transform md:left-auto md:right-0 md:top-0 md:w-[343px] md:-translate-y-1/2 md:translate-x-0 lg:w-[443px] 2xl:w-[553px] 3xl:w-auto">
                                {/* <picture>
                                    <source type="image/webp" srcSet="/next/contenthash/next/optimized/box-house.contenthash.a4141741727ff198ee4bf8fa2592bf54f1550bd2.webp 1x, /next/contenthash/next/optimized/box-house@2x.contenthash.abd3dc556bbdc5a4b34df5fbf6e6865ccfc5ae90.webp 2x"/>
                                    <img width="663" height="663" alt="" loading="lazy" src="/next/contenthash/next/optimized/box-house.contenthash.a4141741727ff198ee4bf8fa2592bf54f1550bd2.png"/>
                                </picture> */}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 space-y-4 px-0 md:grid-cols-2 md:space-x-4 md:space-y-0">
                            <div className="space-y-4">
                                <div className="space-y-4">
                                    <h3 className="copy-h2">Invest for retirement.</h3>
                                    <div className="copy-body">Traditional IRA, Roth IRA, SEP IRA, 401(k) Rollover</div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="copy-h2">Invest for education.</h3>
                                    <div className="copy-body">529 Account for college savings</div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="copy-h2">Invest for everything else.</h3>
                                    <div className="copy-body">Individual Accounts, Joint Accounts, Trust Accounts</div>
                                </div>
                            </div>
                            <div className="max-w-[440px] space-y-4 3xl:max-w-[550px]">
                                <h3 className="copy-h2">Invest even faster with the Wealthfront Cash Account.</h3>
                                <div className="copy-body">
                                    <p>Enjoy a 
                                    4.80%
                                    APY on all your cash. Pay bills, save for big purchases, or get in the market in minutes. Our technology lets you automate your paycheck and organize cash effortlessly.</p>
                                    <br/>
                                    <div className="flex flex-col items-start">
                                        <Link aria-label="Learn more about investing with our cash account" className="z-10 relative font-medium underline text-eggplant" to="/">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="relative bg-[#161338] py-24 pt-40 text-white lg:py-16 2xl:py-32">
            {/* <div className="absolute top-0 w-full overflow-hidden lg:top-1/2 lg:-translate-y-1/2">
                <picture>
                    <source type="image/webp" srcSet="/next/contenthash/next/stock_investing/stock_investing_module_banner-640w.contenthash.fba2430424203aa7d327ec0c88ba47cdb5a1e607.webp 640w, /next/contenthash/next/stock_investing/stock_investing_module_banner-750w.contenthash.930b46e6c57e9591ff258314a402c7ed03f62f6c.webp 750w, /next/contenthash/next/stock_investing/stock_investing_module_banner-828w.contenthash.6c3a75fcdaf36d8107d1ca35f055a988abc63a7d.webp 828w, /next/contenthash/next/stock_investing/stock_investing_module_banner-1080w.contenthash.ddac27439b432587791b530c03064620036610a5.webp 1080w, /next/contenthash/next/stock_investing/stock_investing_module_banner-1200w.contenthash.53fae4bdc70a0169cecb49c12db174c9d287f966.webp 1200w, /next/contenthash/next/stock_investing/stock_investing_module_banner-1920w.contenthash.22e34a88c5e76593903bbe654d034712094373e3.webp 1920w, /next/contenthash/next/stock_investing/stock_investing_module_banner-2048w.contenthash.3396298c3016fed74c864c55493a22c1fbd6ca55.webp 2048w, /next/contenthash/next/stock_investing/stock_investing_module_banner-3840w.contenthash.2e0e5e691c5661371441f222f4389087f00ed1c3.webp 3840w"/>
                    <img className="relative left-1/2 -translate-x-1/2 hidden lg:block h-auto max-h-[400px] min-w-[130%] w-auto object-contain" width="1178" height="400" alt="" loading="eager" src="/next/contenthash/next/stock_investing/stock_investing_module_banner.contenthash.9b308b700fe787a1a09997f0a728f374b3f0d32d.png"/>
                </picture>
                <picture>
                    <source type="image/webp" srcSet="/next/contenthash/next/stock_investing/mobile_banner_stock_module.contenthash.3b162d5b60f5d87da2e68291022513d9e4f596a7.webp 1x, /next/contenthash/next/stock_investing/mobile_banner_stock_module@2x.contenthash.459aae3893e970b2e4b0dc0a582e2b3c084a7e7c.webp 2x"/>
                    <img className="lg:hidden h-[170px] object-cover" width="1178" height="170" alt="Background banner of glowing stock icons" loading="eager" src="/next/contenthash/next/stock_investing/mobile_banner_stock_module.contenthash.3dee69a25a56df30dc785b6f18dffb07d2a72fc1.png"/>
                </picture>
            </div> */}
            {/* <div class="w-full overflow-hidden">
                <picture>
                    <source type="image/webp" srcSet="/next/contenthash/next/stock_investing/floating_token_top_module.contenthash.336989cde44825b496b03d0f7449c9d81040efb0.webp 1x, /next/contenthash/next/stock_investing/floating_token_top_module@2x.contenthash.3637ce4a138bd64cc9d0586e1e51a932b08b3e09.webp 2x"/>
                    <img width="993" height="223" className="absolute -top-[90px] right-4 lg:right-1/2 lg:translate-x-1/2 z-20 object-right lg:object-center w-[350px] lg:w-auto object-cover h-[180px] md:h-[223px]" alt="Floating stock tokens" loading="lazy" src="/next/contenthash/next/stock_investing/floating_token_top_module.contenthash.6a6bcbff6770aace4761f41f4eaa83267dd8ec28.png"/>
                </picture>
                <picture>
                    <source type="image/webp" srcSet="/next/contenthash/next/stock_investing/floating_token_bottom_module.contenthash.df2d9343e1c0c26d3cc35debf6d5e934937a3a10.webp 1x, /next/contenthash/next/stock_investing/floating_token_bottom_module@2x.contenthash.7ad2ce4b09411ba5990996c084086fab855ac89d.webp 2x"/>
                    <img width="955" height="251" className="absolute object-left lg:object-center w-[350px] lg:w-auto left-4 lg:left-1/2 lg:-translate-x-1/2 z-20 object-cover h-[200px] md:h-[251px] -bottom-[120px] md:-bottom-[30px]" alt="Floating stock tokens" loading="lazy" src="/next/contenthash/next/stock_investing/floating_token_bottom_module.contenthash.48c47cf4c269e8d572c4dcb7b53243c58d338344.png"/>
                </picture>
            </div> */}
            <div className="relative space-y-4 md:space-y-6 md:text-center px-6 sm:px-12 z-30">
                <div className="space-y-4">
                    <p className="copy-caption mb-2 font-bold">Meet our stock investing account</p>
                    <h2 className="copy-h1-alt">
                        Want a little more control? <br/>
                        <span className="copy-h1 overflow-visible py-1">Invest in individual stocks.</span>
                    </h2>
                </div>
                <div className="space-y-4">
                    <p className="copy-body max-w-[450px] md:m-auto md:max-w-[650px]">
                        <span className="copy-body font-semibold">Fractional shares. No commissions. $1 to get started.</span>
                        <br/>Other investing apps might focus on what’s trending, but our Stock Investing Account lets you skip the endless hours of research, to help you make smarter investing decisions, faster. Browse 45+ pre-built collections and invest in companies you love without the advisory or management fees.
                    </p>
                </div>
                <div className=" flex-row md:items-center flex-col  flex md:justify-center items-start xl:items-center space-y-4">
                    <Link className="z-10  button_button__SRc2Y relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__ipohF bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap w-[234px] bg-lavender2" to="/">Get started</Link>
                    <Link className="z-10 relative font-medium underline text-white" to="/">Learn more about Stock Investing</Link>
                </div>
            </div>
        </div>
    </>
  )
};

export default Section5;