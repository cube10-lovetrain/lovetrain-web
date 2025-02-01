import Image from "next/image";
import React from "react";

const WhyChariFun = () => {
	return (
		<div className="bg-gray-100 pt-10 md:pt-16 pb-20 px-4 flex flex-col items-center justify-center">
			<h2 className="text-black text-[18px] md:text-[25px] font-bold">
				Why Chari Fun?
			</h2>

			<div className="flex flex-col gap-8 md:gap-10 mt-8">
				{/* Be a part of a noble cause */}
				<div className="border border-gray-300 rounded-lg p-4 md:p-7 max-w-4xl">
					<h2 className="text-black text-[17px] md:text-[25px] font-bold text-center">
						Be a part of a noble cause
					</h2>
					<div className="flex space-x-5">
						<Image
							src="/icons/dollar-bag.svg"
							width={50}
							height={50}
							alt="why-charifun-1"
						/>
						<p className="text-gray-400 text-[15px] md:text-[18px] mt-4 text-start md:text-center">
							We recognize that giving is a selfless act in and of itself, but
							we also recognize that competition might spur additional giving,
							which will benefit the cause.
						</p>
					</div>
				</div>

				{/* Compete and win exciting prizes*/}
				<div className="border border-gray-300 rounded-lg p-4 md:p-7 max-w-4xl">
					<h2 className="text-black text-[17px] md:text-[25px] font-bold text-center">
						Compete and win exciting prizes
					</h2>
					<div className="flex space-x-5">
						<Image
							src="/icons/win.svg"
							width={50}
							height={50}
							alt="why-charifun-1"
						/>
						<p className="text-gray-400 text-[15px] md:text-[18px] mt-4 text-start md:text-center">
							We value your contribution. In order to win the prize in the
							competition, you have to share your campaign page with your
							friends, and raise as much funds as you can.
						</p>
					</div>
				</div>

				{/* Join a fundraiser started by a celebrity */}
				<div className="border border-gray-300 rounded-lg p-4 md:p-7 max-w-4xl">
					<h2 className="text-black text-[17px] md:text-[25px] font-bold text-center">
						Join a fundraiser started by a celebrity
					</h2>
					<div className="flex space-x-5">
						<Image
							src="/icons/star.svg"
							width={50}
							height={50}
							alt="why-charifun-1"
						/>
						<p className="text-gray-400 text-[15px] md:text-[18px] mt-4 text-start md:text-center">
							By starting your sub-campaign, you will be a part of your
							celebrity’s favorite cause. You can affect the campaign that your
							favorite celebrity has started.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChariFun;
