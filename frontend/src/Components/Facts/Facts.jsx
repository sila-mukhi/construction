import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Facts = () => {
  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
  });

  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({ duration: 1200 });

    // Function to update the count values
    const updateCounts = () => {
      setCounts(prevCounts => ({
        count1: prevCounts.count1 < 30 ? prevCounts.count1 + 1 : prevCounts.count1,
        count2: prevCounts.count2 < 20 ? prevCounts.count2 + 1 : prevCounts.count2,
        count3: prevCounts.count3 < 8 ? prevCounts.count3 + 1 : prevCounts.count3,
        count4: prevCounts.count4 < 15 ? prevCounts.count4 + 1 : prevCounts.count4,
      }));
    };

    // Start updating the counts every 100ms for slower counting
    const intervalId = setInterval(updateCounts, 200);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Only run once on mount

  return (
    <section id="facts" className="youtube-area1">
      <div className="container">
        <div className="facts-wrapper mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 ts-facts col-6 mt-md-0" data-aos="fade-left">
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span>{counts.count1}</span>
                </h2>
                <h3 className="ts-facts-title text-white">Years Of Experience</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-6 ts-facts" data-aos="fade-left">
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span>{counts.count2}</span>
                </h2>
                <h3 className="ts-facts-title text-white">Completed Projects</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ts-facts col-6 mt-sm-0" data-aos="fade-left">
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span>{counts.count3}</span>
                </h2>
                <h3 className="ts-facts-title text-white">Upcoming Projects</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ts-facts col-6 mt-md-0" data-aos="fade-left">
              <div className="ts-facts-content">
                <h2 className="ts-facts-num">
                  <span>{counts.count4}</span>
                </h2>
                <h3 className="ts-facts-title text-white">Awards & Accolades</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
