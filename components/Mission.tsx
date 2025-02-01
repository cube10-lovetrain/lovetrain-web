import Image from "next/image";
import React from "react";

const Mission = () => {
	return (
		<div className="bg-gray-100 mx-auto pt-24 pb-10">
			{/* Mission */}
			<div className="flex flex-col-reverse md:flex-row gap-3 md:gap-20 justify-center items-center ">
				<div>
					<h1 className="text-[20px] md:text-[25px] lg:text-[30px] text-black font-bold">
						Our Mission
					</h1>
					<p className="text-gray-400 text-[16px] md:text-[19px] max-w-[350px] sm:max-w-[500px] md:max-w-2xl pt-2">
						We are a platform for fundraising with the goal of revolutionizing
						the way the fundraising industry now operates. We aim to turn donors
						into fundraisers. It makes it easier for a community of givers with
						similar goals to come together. Additionally, there is increased
						awareness when more money is raised. Making fundraising more
						exciting for everyone involved is one way to tackle it in a
						sustainable way. We want to reward you for your efforts with our
						life-changing rewards since we are aware of the compassion you
						possess.
					</p>
				</div>

				<Image
					src="/images/mission.svg"
					alt="Our mission"
					width={350}
					height={350}
					priority
					className="w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] "
				/>
			</div>

			{/* Partners */}
			<div className="flex flex-col-reverse md:flex-row gap-1 md:gap-20 justify-center items-center pt-12">
				<Image
					src="/images/partners.svg"
					alt="Our mission"
					width={350}
					height={350}
					priority
					className="w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] "
				/>

				<div>
					<h1 className="text-[20px]  md:text-[25px] lg:text-[30px] text-black font-bold">
						Become a partner
					</h1>
					<p className="text-gray-400 text-[16px] md:text-[19px] max-w-[350px] sm:max-w-[500px] md:max-w-2xl pt-2">
						We are aware of your effect over those who admire and respect you.
						Your voice and influence will make a significant difference in
						someone&#39;s life and for the greater good. If you&#39;re passionate about
						a particular cause, Reach out , and we can arrange to start your
						fundraising campaign here.
					</p>
				</div>
			</div>

			<div className="mt-6 md:mt-1 mr-0 md:mr-24 flex justify-center items-center">
				<button className="px-6 py-3 bg-[#ff9f1c] text-white font-semibold rounded-full hover:bg-[#ffa527] transition duration-300">
					Get in touch
				</button>
			</div>
		</div>
	);
};

export default Mission;
