import AboutUsPoster2 from '@/components/AboutUs/AboutUSPoster2';
import AboutUsHeader from '@/components/AboutUs/AboutUsHeader';
import AboutUsPoster1 from '@/components/AboutUs/AboutUsPoster1';
import GetToKnowUs from '@/components/AboutUs/GetToKnowUs';
import Footer from '@/components/Footer/footer';
import Navbar from '@/components/Navbar/Navbar';
import ScrollToTopButton from '@/components/Utility/ScrollToTop';
import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading'
import OurTeam from '@/components/AboutUs/OurTeam';
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Add your loading logic here, e.g., fetching data
      // Simulate a delay with setTimeout
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Change the timeout duration as needed
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div>
      {isLoading ? (
        // Loading bar or spinner (customize based on your design)
        <Loading />
      ) : (
        <>
          <Navbar />
          <AboutUsHeader />
          <AboutUsPoster1 />
          {/* <GetToKnowUs /> */}
          <AboutUsPoster2 />
          <OurTeam />
          <ScrollToTopButton />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
