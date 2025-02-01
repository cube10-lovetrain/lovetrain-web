"use client";

import { privacyData } from "@/data/privacy-policy";
import React, { useState } from "react";

const PrivacyPolicy = () => {
	const [showAll, setShowAll] = useState(false);

	return (
		<div className="w-full max-w-4xl mx-auto pt-10 pb-10">
			<h1 className="text-2xl font-bold">Privacy Policy</h1>

			<div className="space-y-6">
				{privacyData
					.slice(0, showAll ? privacyData.length : 9)
					.map((section, index) => (
						<div key={index} className="space-y-2">
							<h2 className="text-lg font-semibold">{section.title}</h2>
							<div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
								{section.content}
							</div>
						</div>
					))}

				{!showAll && (
					<div className="pt-4">
						<button onClick={() => setShowAll(true)} className="w-full">
							Show More
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default PrivacyPolicy;
