import Image from "next/image";
import React from "react";

const AboutUs = () => {
	return (
		<div className='bg-[url("/images/about-us-bg.svg")] bg-cover bg-center bg-no-repeat py-5 flex flex-col justify-center'>
			<div className="flex flex-col justify-center items-center pt-6 px-5 md:px-0">
				<h1 className="text-xl md:text-2xl text-white font-semibold text-center">
					About <span className="text-[#ff9f1c]">Charifun</span>
				</h1>
				<p className="text-[15px] md:text-[18px] text-white text-center mt-4 max-w-5xl">
					Chari Fun is a fundraising platform curated for a new generation of
					donors. We believe that there is a better way to raise funds than the
					existing ones. We wanted to change how people viewed fundraising, so
					we turned donors to fundraisers. Not only the donations are going to
					be given back to the community, but also the donors have the chance to
					change their own lives by winning the life-revolving prizes and
					opportunities. We want non-profit organizations to work.
				</p>
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-16 gap-8 md:gap-16">
				<Image
					src="/images/about-our-mission.svg"
					alt="About us mission"
					width={400}
					height={400}
					className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mt-5"
				/>

				<div className="px-5"> 
					<h1 className="text-xl md:text-2xl text-white font-semibold text-center">
						Our Mission
					</h1>
					<p className="text-[15px] md:text-[18px] text-white text-center mt-4 max-w-3xl">
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
			</div>
		</div>
	);
};

export default AboutUs;
