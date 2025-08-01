import { Button } from '@page/components/Button';
import { Navbar } from '@page/components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='bg-black flex flex-col items-center justify-center min-h-screen px-4'>
      
      <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center'>
        View my <span className='bg-green-500'>PROJECTS</span> 
      </h1>
      
     
      
      
      <Button />
    </div>
    </>
  ) 
};

export default Home;