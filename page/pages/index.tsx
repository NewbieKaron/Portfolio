import React from 'react';
import { Button } from 'styles/components/Button';
import { Navbar } from 'styles/components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center justify-center min-h-screen px-4'>
      
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center'>
        Portfolio
      </h1>
      <Button />
    </div>
    </>
  )
};

export default Home;