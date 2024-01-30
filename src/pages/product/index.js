import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
const Index = () => {

    const[createOverlay,setCreateOverlay] = useState(false)
    const [packageData, setPackagedata] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [person, setPerson] = useState('');
    // Add more state variables as needed for your package data


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/packages'); // Path relative to the public directory
        setPackagedata(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [packageData]);

  const handleCreateOverlay = () => {
    setCreateOverlay(true)
    alert("button is clicked")
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8080/packages', {
            title,
            price: parseFloat(price),
            person: parseInt(person),
            // Add more fields as needed for your package data
        });

        console.log('Package added successfully:', response.data);

        setCreateOverlay(false);

        // Optionally, you can fetch the updated package data to refresh the list
        fetchData();
    } catch (error) {
        console.error('Error adding package:', error);
    }
};

const handleDeletePackage = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/packages/${id}`);
      // Optionally, you can fetch the updated package data to refresh the list
      fetchData();
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };
  

  return (
    <div>
      <div className='flex items-center gap-10'><h1>Travel Packages</h1><button className='bg-blue-500 py-2 px-5 text-white' onClick={handleCreateOverlay}>Create</button></div>
      <ul>
        {packageData.map((pkg) => (
          <li key={pkg.id} className='bg-fuchsia-50 border'>
            <h3>{pkg.title}</h3>
            <p>Price: ${pkg.price}</p>
            <p>Rating: {pkg.rating}</p>
            <p>Duration: {pkg.days} days / {pkg.nights} nights</p>
            <Image src={pkg.thumbnail} width={500} height={300} alt={pkg.title} />
            <button
              onClick={() => handleDeletePackage(pkg.id)}
              className='border py-3 px-9 bg-red-500 text-white'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {createOverlay && (
      <div className='bg-black bg-opacity-35 h-screen absolute top-0 w-full flex justify-center items-center'>
        <div className='bg-white w-2/6 h-2/4 p-8'>
        <form onSubmit={handleFormSubmit}>
            <label>
                <div className='pb-2'>Enter Title</div>
                <input type='text' className='border border-slate-300 rounded py-2 w-full' value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                <div className='pb-2'>Enter Price</div>
                <input type='number' className='border border-slate-300 rounded py-2 w-full' value={price} onChange={(e) => setPrice(e.target.value)} required />
            </label>
            <label>
                <div className='pb-2'>Enter Person</div>
                <input type='number' className='border border-slate-300 rounded py-2 w-full' value={person} onChange={(e) => setPerson(e.target.value)} required />
            </label>
            {/* Add more fields as needed for your package data */}
            <div className='flex gap-5 justify-center pt-10'>
                <button className='border py-3 px-9 bg-red-500 text-white' onClick={() => { setCreateOverlay(false) }}>Cancel</button>
                <button type='submit' className='border py-3 px-9 bg-green-500 text-white'>Submit</button>
            </div>
        </form>
        </div>
        <p>This is the overlay content.</p>
      </div>
    )}
    </div>
  );
};

export default Index;
