import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import '../../style/Home.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';


function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-light-slate to-ambient-orange bg-fixed text-eggplant"> 
        <Layouts> 
              {/* Home Section1 */}
              <Section1 />

              {/* Home Section Hero */}
               <Section2 />

              {/* Explore Module  */}
              <Section3 />

              {/* Automation Module  */}
              <Section4 />

              {/* Pricing Module  */}
              <Section5 />

              {/* Clients Module  */}
              <Section6 />

              {/* Faq Module  */}
              <Section7 />
        </Layouts>
        </div>
    </>
  )
};

export default Home;