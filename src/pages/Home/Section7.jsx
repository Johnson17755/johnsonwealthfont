import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowUp } from "react-icons/hi";


function Section7() {
    const [isVisible, setIsVisible] = useState(false);

  // Define the scrollTop function at the module level
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // useEffect for the scroll event listener with cleanup
  useEffect(() => {
    const listenToScroll = () => {
      let heightToHidden = 250;
      const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

      windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", listenToScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
       <div data-testid="faq-module" className="bg-white">
            <div className="mx-auto border-eggplant px-8 text-eggplant lg:container lg:px-24">
                <div className="flex flex-col border-inherit py-16 lg:py-24">
                    <div className="flex flex-col space-y-4 border-b border-inherit pb-8 md:flex-row md:items-center md:justify-between md:gap-x-4 md:space-y-0">
                        <div className="copy-h1-alt lg:w-1/2">
                            <h2 className="xs:max-w-[280px] md:max-w-[310px] xl:max-w-[470px] 2xl:max-w-[520px]">Invest a little time in the details.</h2>
                        </div>
                        <div className="copy-h3-alt">
                            <div className="md:w-96 lg:mr-9 2xl:w-126">
                                Still deciding if we’re right for you?<br/>These frequently asked questions may help.
                            </div>
                        </div>
                    </div>
                    <div className="faq_module_layout__1TEm7 py-8 lg:gap-x-16 xl:gap-x-24">
                        <div className="mt-8 flex flex-col space-y-4 first:mt-0" style={{ breakInside: 'avoid-column' }} data-testid="faq-item">
                            <h3 className="copy-h3-alt">This sounds complicated. I bet this is complicated, right?</h3>
                            <div className="copy-body">
                                <div className="space-y-4">
                                    <div className="flex flex-col items-start">What we do is complicated. What you do is really really not. Just answer a few questions, and we’ll build an investment portfolio with your name on it. Then, as soon as your money arrives, we invest it just like we said we would. Bada bing, etc.</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col space-y-4 first:mt-0" style={{ breakInside: 'avoid-column' }} data-testid="faq-item">
                            <h3 className="copy-h3-alt">What if I don’t like your picks? Can I choose my own investments?</h3>
                            <div className="copy-body">
                                <div className="space-y-4">
                                    <div className="flex flex-col items-start">Yup. You can customize your Wealthfront portfolio six ways to Sunday, both when you’re first opening a new account or at any point afterwards.</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col space-y-4 first:mt-0" style={{ breakInside: 'avoid-column' }} data-testid="faq-item">
                            <h3 className="copy-h3-alt">What if I want to pull my money out?</h3>
                            <div className="copy-body">
                                <div className="space-y-4">
                                    <div className="flex flex-col items-start">Well, it’s your money, so you can withdraw it at any time.</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col space-y-4 first:mt-0" style={{ breakInside: 'avoid-column' }} data-testid="faq-item">
                            <h3 className="copy-h3-alt">I bet this is really expensive.</h3>
                            <div className="copy-body">
                                <div className="space-y-4">
                                    <div className="flex flex-col items-start">That’s not a question, but actually no. The weighted average annual expense ratio of the investments of a taxable Wealthfront portfolio is between 0.05–0.29%. Wealthfront also charges a 0.25% annual advisory fee, but for more than 96% of our clients with a recommended portfolio, that’s covered by Tax-Loss Harvesting.</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col space-y-4 first:mt-0" style={{ breakInside: 'avoid-column' }} data-testid="faq-item">
                            <h3 className="copy-h3-alt">Tax-loss what now?</h3>
                            <div className="copy-body">
                                <div className="space-y-4">
                                    <div className="flex flex-col items-start">
                                        Tax-Loss Harvesting. It’s a way to take advantage of changes in the market to help reduce your tax bill and give you more money to invest. For most clients, it generates savings worth at least 11 times our advisory fee, which means your tax savings more than pay for our fee.<Link aria-label="Learn more about Tax-Loss Harvesting" className="z-10 relative font-medium underline text-eggplant" to="/" rel="noopener noreferrer" target="_blank">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col space-y-4 first:mt-0" style={{ breakInside: 'avoid-column' }} data-testid="faq-item">
                            <h3 className="copy-h3-alt">I love everything about this. How do I give you my money?</h3>
                            <div className="copy-body">
                                <div className="space-y-4">
                                    <div className="flex flex-col items-start">
                                        We make it easy! Electronic bank deposit, wire transfer or account transfer from your brokerage to Wealthfront.<Link aria-label="Learn more about funding your Wealthfront account" className="z-10 relative font-medium underline text-eggplant" to="/" rel="noopener noreferrer" target="/">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col space-y-4 first:mt-0" style={{ breakInside: 'avoid-column' }} data-testid="faq-item">
                            <h3 className="copy-h3-alt">But I’ve already got investments somewhere else.</h3>
                            <div className="copy-body">
                                <div className="space-y-4">
                                    <div className="flex flex-col items-start">
                                        Again, that’s not a question. But you don’t always need to sell your investments to move them. We make the transfer process free, simple, and tax-efficient.<Link aria-label="Learn more about transferring securities from another firm" className="z-10 relative font-medium underline text-eggplant" href="/" rel="noopener noreferrer" target="/">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col space-y-4 first:mt-0" style={{ breakInside: 'avoid-column' }} data-testid="faq-item">
                            <h3 className="copy-h3-alt">How is this different than investing in the S &amp;P 500?</h3>
                            <div className="copy-body">
                                <div className="space-y-4">
                                    <div className="flex flex-col items-start">
                                        Investing in the S &amp;P means only investing in US equities. Fortunately for us, the world is bigger than that. We use 10 global asset classes to diversify your investment and better weather anything the market throws at you.<Link aria-label="Learn more about why you shouldn&#x27;t just invest in in the S&amp;P 500" className="z-10 relative font-medium underline text-eggplant" to="/" rel="noopener noreferrer" target="/">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copy-body mt-8 flex flex-col items-start">
                            <Link className="z-10 relative font-medium underline text-eggplant" to="/" rel="noopener noreferrer" target="/">Read more frequently asked questions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Scroll to top */}
    {isVisible && (
      <div className='scroll_top' onClick={scrollTop}>
      <HiOutlineArrowNarrowUp className='i' />
    </div>
    )}
    </>
  )
};

export default Section7;