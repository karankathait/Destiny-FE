import Footer from '@/components/Footer/footer';
import PlanMyHolidayForm from '@/components/Forms/PlanMyHoliday';
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
          <PlanMyHolidayForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
