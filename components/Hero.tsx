import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<section className="bg-gray-100 min-h-screen flex items-center">
			<div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
				{/* Left Column */}
				<div className="flex-1 text-center md:text-left">
					<div className="bg-gradient-to-r from-[#ff9f1c] to-[#ffe2bb] p-6">
						<p className="text-[20px] md:text-[30px] font-bold">
							Join fundraising competitions Support your favorite cause Win
							amazing prizes
						</p>
					</div>
					<div className="mt-6">
						<button className="px-6 py-3 bg-[#ff9f1c] text-white font-semibold rounded-full hover:bg-[#ffa527] transition duration-300">
							Explore
						</button>
					</div>
				</div>

				{/* Right Column */}
				<div className="flex-1 mt-1 md:-mt-56">
					<Image
						src="/images/hero.svg"
						alt="Hero Section Image"
						className="mx-auto md:mx-0"
						width={900}
						height={900}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
