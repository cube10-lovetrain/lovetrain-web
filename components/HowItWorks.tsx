import Image from "next/image";
import React from "react";

const HowItWorks = () => {
	return (
		<div className="bg-gray-100 mx-auto pb-10">
			<h2 className="text-center text-[20px] sm:text-[20px] md:text-[30px] font-bold text-black">
				How it works?
			</h2>
			<div className="max-w-6xl mx-auto mt-2">
				<p className="text-center text-gray-400 text-[16px] sm:text-[18px] md:text-[20px]">
					Follow these easy steps to get started
				</p>
			</div>

			<div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mt-8">
				{/* Select your favorite cause */}
				<div className="w-[250px] h-[280px] rounded-xl bg-[#F7F7F7] shadow-md pl-2 pr-5 pt-2">
					<div className="flex">
						<div>
							<p className="text-gray-400 text-[35px]">1</p>
						</div>
						<div className="flex flex-col gap-2 justify-center items-center">
							<Image src="/icons/love.svg" alt="Heart" width={60} height={60} />
							<h2 className="text-black text-[18px] md:[20px] font-semibold text-center">
								Select your favorite cause
							</h2>
							<p className="text-gray-500 text-[15px] md:text-[16px] font-light text-center">
								Select a cause that has meaning for you. Create your fundraising
								page.
							</p>
						</div>
					</div>
				</div>

				{/* Raise funds from friends */}
				<div className="w-[250px] h-[280px] rounded-xl bg-[#F7F7F7] shadow-md pl-2 pr-5 pt-2">
					<div className="flex">
						<div>
							<p className="text-gray-400 text-[35px]">2</p>
						</div>
						<div className="flex flex-col gap-2 justify-center items-center">
							<Image
								src="/icons/funds.svg"
								alt="Heart"
								width={60}
								height={60}
							/>
							<h2 className="text-black text-[18px] md:[20px] font-semibold text-center">
								Raise funds from friends
							</h2>
							<p className="text-gray-500 text-[15px] md:text-[16px] font-light text-center">
								To compete with other fundraisers, share your page with your
								friends and raise as much funds as you can.
							</p>
						</div>
					</div>
				</div>

				{/* Win big prizes */}
				<div className="w-[250px] h-[280px] rounded-xl bg-[#F7F7F7] shadow-md pl-2 pr-5 pt-2">
					<div className="flex">
						<div>
							<p className="text-gray-400 text-[35px]">3</p>
						</div>
						<div className="flex flex-col gap-2 justify-center items-center">
							<Image src="/icons/prizes.svg" alt="Heart" width={60} height={60} />
							<h2 className="text-black text-[18px] md:[20px] font-semibold text-center">
								Win big prizes
							</h2>
							<p className="text-gray-500 text-[15px] md:text-[16px] font-light text-center">
								The grand prize will go to the person who raises the most for
								the cause.
							</p>
						</div>
					</div>
				</div>

				{/* Earn while doing good */}
				<div className="w-[250px] h-[280px] rounded-xl bg-[#F7F7F7] shadow-md pl-2 pr-5 pt-2">
					<div className="flex">
						<div>
							<p className="text-gray-400 text-[35px]">4</p>
						</div>
						<div className="flex flex-col gap-2 justify-center items-center">
							<Image src="/icons/earn.svg" alt="Heart" width={60} height={60} />
							<h2 className="text-black text-[18px] md:[20px] font-semibold text-center">
								Earn while doing good
							</h2>
							<p className="text-gray-500 text-[15px] md:text-[16px] font-light text-center">
							Even if you don&#39;t win the grand prize, you can still earn other prizes or become one of the top donors.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
