import React from "react";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Mission from "@/components/Mission";
import WhyChari from "@/components/WhyChari";


const Page: React.FC = () => {
	return (
		<div>
			<Hero />
			<HowItWorks />
			<WhyChari />
      <Mission />
      <FAQ />
		</div>
	);
};

export default Page;
