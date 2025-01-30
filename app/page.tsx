import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Mission from "@/components/Mission";
import WhyChari from "@/components/WhyChari";
import React from "react";

const Page: React.FC = () => {
	return (
		<div>
			<Hero />
			<HowItWorks />
			<WhyChari />
      <Mission />
		</div>
	);
};

export default Page;
