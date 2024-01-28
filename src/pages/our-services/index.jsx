import GetToKnowUs from '@/components/AboutUs/GetToKnowUs';
import Footer from '@/components/Footer/footer';
import OurServices from '@/components/Layout/OurServices';
import Navbar from '@/components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading'
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Add your loading logic here, e.g., fetching data
      // Simulate a delay with setTimeout
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Change the timeout duration as needed
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <GetToKnowUs />
          <OurServices />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
