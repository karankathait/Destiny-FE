import Footer from '@/components/Footer/footer';
import Navbar from '@/components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import CategoryPage from '@/components/Destiny-Store/CategoryPage';
import Loading from '@/components/Loading'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {

      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    };

    fetchData();
  }, []); 

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <CategoryPage />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
