import React from "react";
import HowItWorks from "../HowItWorks";

const HowItWorksPage = () => {
	return (
		<div className="bg-gray-100 pt-10 md:pt-20 pb-20 flex flex-col justify-center items-center">
			<HowItWorks />

			<div className="mt-6">
				<iframe
					width="800"
					height="400"
					src="https://www.youtube.com/embed/tdugYBB5ois"
					title="LoveTrain.Net How It Works"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="w-[350px] md:w-[800px] h-[300px] md:h-[450px] rounded-md"
				></iframe>
			</div>

			<div className="mt-2 md:mt-6 ">
				<button className="px-6 py-3 bg-[#ff9f1c] text-white font-semibold rounded-full hover:bg-[#ffa527] transition duration-300">
					Explore
				</button>
			</div>
		</div>
	);
};

export default HowItWorksPage;
