import React from "react";

const WhyChari = () => {
	return (
		<div className="bg-gray-100 mx-auto pt-16">
			<h2 className="text-center text-[20px] sm:text-[20px] md:text-[30px] font-bold text-black">
				Why Chari Fun?
			</h2>
			<div className="max-w-6xl mx-auto mt-2">
				<p className="text-center text-gray-400 text-[16px] sm:text-[18px] md:text-[20px]">
					Learn more about us
				</p>
			</div>

			<iframe
				width="700"
				height="402"
				src="https://www.youtube.com/embed/BQOxWZrwmV4"
				title="Charifun.com"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
				className="mx-auto mt-6 rounded-2xl w-[350px] h-[202px] sm:w-[480px] sm:h-[250px] md:w-[700px] md:h-[402px]"
			></iframe>
		</div>
	);
};

export default WhyChari;
