import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<section className="bg-gray-100 min-h-screen flex items-center">
			<div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
				{/* Left Column */}
				<div className="flex-1 text-center md:text-left">
					<div className="bg-transparent rounded-md md:bg-gradient-to-r from-[#ff9f1c] to-[#fdedd8] p-6">
						<p className="text-[16px] sm:text-[18px] md:text-[30px] max-w-[300px] md:max-w-[450px] font-bold text-black">
							Join fundraising competitions Support your favorite cause Win
							amazing prizes
						</p>
					</div>
					<div className="mt-3 md:mt-6">
						<button className="px-6 py-3 bg-[#ff9f1c] text-white font-semibold rounded-full hover:bg-[#ffa527] transition duration-300">
							Explore
						</button>
					</div>
				</div>

				{/* Right Column */}
				<div className="flex-1 ">
					<div className="w-full relative right-12 md:right-0 mt-0 lg:-mt-56">

					<Image
						src="/images/hero.svg"
						alt="Hero Section Image"
						className="w-full"
						width={900}
						height={900}
					/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
