import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React from 'react';

const Page: React.FC = () => {
  return (
	<div>
	  <Navbar />
    <Hero />
	</div>
  );
};

export default Page;