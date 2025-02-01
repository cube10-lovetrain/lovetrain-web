"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const AnimatedCounter = ({
	endValue,
	duration = 2000,
}: {
	endValue: number;
	duration?: number;
}) => {
	const [count, setCount] = useState(300);

	useEffect(() => {
		let startTime: number;
		let animationFrame: number;

		const animate = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const progress = (currentTime - startTime) / duration;

			if (progress < 1) {
				setCount(Math.floor(endValue * progress));
				animationFrame = requestAnimationFrame(animate);
			} else {
				setCount(endValue);
			}
		};

		animationFrame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrame);
	}, [endValue, duration]);

	return <>{count}</>;
};

const Hero = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("stats-section");
		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, []);

	return (
		<section
			id="stats-section"
			className="bg-gray-100 pt-10 md:pt-20 pb-20 flex items-center"
		>
			<div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-16">
				<div>
					<h2 className="text-[20px] md:text-[30px] font-bold w-full md:max-w-[300px]">
						Changing lives, One Step at a Time.
					</h2>
					<p className="pt-4 text-gray-500 max-w-[800px]">
						Chari Fun is a fundraising platform curated for a new generation of
						donors. We believe that there is a better way to raise funds than
						the existing ones.
					</p>

					<div className="bg-[#ff9f1c] px-5 md:px-16 max-w-[500px] py-4 rounded-full mt-12 md:mt-20">
						<div className="flex items-center justify-center space-x-4">
							<div>
								<h2 className="text-[20px] md:text-[30px] text-white font-bold">
									+{isVisible ? <AnimatedCounter endValue={455} /> : "300"}
								</h2>
								<p className="text-[15px] md:text-[18px] text-black ml-2">
									Campaigns
								</p>
							</div>

							<div>
								<h2 className="text-[20px] md:text-[30px] text-white font-bold">
									+{isVisible ? <AnimatedCounter endValue={1200} /> : "300"}
								</h2>
								<p className="text-[15px] md:text-[18px] text-black ml-2">
									Donations
								</p>
							</div>

							<div>
								<h2 className="text-[20px] md:text-[30px] text-white font-bold">
									+{isVisible ? <AnimatedCounter endValue={455} /> : "300"}
								</h2>
								<p className="text-[15px] md:text-[18px] text-black ml-2">
									Campaigns
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<Image
						src="/images/about.svg"
						alt="Smiling kids"
						width={600}
						height={600}
						className="ml-0 md:ml-12 "
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
