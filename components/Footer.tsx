import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-[#1B234A] text-white py-5 md:py-8">
			<div className="w-full max-w-6xl mx-auto px-4 md:px-6">
				{/* Logo Section */}
				<div className="flex justify-center md:justify-start mb-6 md:mb-9">
					<Image
						src="/images/footer-logo.png"
						alt="ChariFun Logo"
						className="w-36 md:w-48 h-auto"
						width={144}
						height={48}
					/>
				</div>

				{/* Links Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-24 ml-2 md:ml-10">
					{/* Information Column */}
					<div className="space-y-2">
						<h3 className="text-sm font-semibold mb-2 md:mb-4">Information</h3>
						<ul className="space-y-2 text-gray-300 text-sm">
							<li>
								<Link
									href="/about"
									className="hover:text-white transition-colors duration-200"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/how-it-works"
									className="hover:text-white transition-colors duration-200"
								>
									How it works
								</Link>
							</li>
							<li>
								<Link
									href="/campaings"
									className="hover:text-white transition-colors duration-200"
								>
									All campaigns
								</Link>
							</li>
							<li>
								<Link
									href="/contact-us"
									className="hover:text-white transition-colors duration-200"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Learn More Column */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold mb-2 md:mb-4">Learn More</h3>
						<ul className="space-y-2 text-gray-300 text-sm">
							<li>
								<Link
									href="/terms-and-conditions"
									className="hover:text-white transition-colors duration-200"
								>
									Terms and Conditions
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="hover:text-white transition-colors duration-200"
								>
									Become a Partner
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="hover:text-white transition-colors duration-200"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="/privacy-policy"
									className="hover:text-white transition-colors duration-200"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>

					{/* Navigation Column */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold mb-2 md:mb-4">Navigation</h3>
						<ul className="space-y-2 text-gray-300 text-sm">
							<li>
								<Link
									href="/"
									className="hover:text-white transition-colors duration-200"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="hover:text-white transition-colors duration-200"
								>
									Explore
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex justify-center items-center md:justify-start ml-0 md:ml-10 gap-3 pt-5 md:pt-8">
					<div className="bg-black rounded-xl p-2">
						<Link
							href="https://web.facebook.com/p/LoveTrain-100093264713022/?mibextid=LQQJ4d"
							target="__blank"
							className="text-white"
						>
							<FiFacebook size={22} />
						</Link>
					</div>
					<div className="bg-black rounded-xl p-2">
						<Link
							href="https://twitter.com/LoveTrainTech"
							target="__blank"
							className="text-white"
						>
							<FaXTwitter size={22} />
						</Link>
					</div>
					<div className="bg-black rounded-xl p-2">
						<Link
							href="https://instagram.com/lovetrain.ca?igshid=YmMyMTA2M2Y="
							target="__blank"
							className="text-white"
						>
							<FaInstagram size={22} />
						</Link>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="mt-8 md:mt-12 flex flex-col items-center space-y-6">
					<p className="text-gray-400 text-sm text-center">
						© 2021 ChariFun. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
