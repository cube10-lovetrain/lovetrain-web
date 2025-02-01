"use client";

import { termsData } from "@/data/terms-and-condition";
import React, { useState } from "react";

const TermsAndConditions = () => {
	const [showAll, setShowAll] = useState(false);

	return (
		<div className="w-full max-w-4xl mx-auto pt-10 pb-10">
			<h2 className="text-2xl font-bold">Terms and Conditions</h2>

			<div className="space-y-6">
				{termsData
					.slice(0, showAll ? termsData.length : 9)
					.map((term, index) => (
						<div key={index} className="space-y-2">
							<h2 className="text-lg font-semibold">{term.title}</h2>
							<p className="text-sm text-gray-600 leading-relaxed">
								{term.content}
							</p>
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

export default TermsAndConditions;
