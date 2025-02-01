import React from "react";

const BecomePartner = () => {
	return (
		<div className="bg-gray-100 pt-10 md:pt-12 pb-20 flex flex-col justify-center items-center">
			<h2 className="text-[17px] md:text-[20px] text-black font-bold">
				Become a partner
			</h2>
			<p className="text-gray-400 text-[16px] md:text-[17px] text-center pt-3 px-3">
				Someone from our team would love to grab coffee with you! Drop your name
				& email in the form and we’ll follow up.
			</p>

			<form className="flex gap-4 md:gap-6 pt-6">
				<input
					type="text"
					placeholder="Full Name"
					className="w-[180px] md:w-[400px] h-[40px] border border-gray-200 rounded-md px-4 bg-transparent focus:outline-gray-300"
				/>
				<input
					type="email"
					placeholder="Email"
					className="w-[180px] md:w-[400px] h-[40px] border border-gray-200 rounded-md px-4 bg-transparent focus:outline-gray-300"
				/>
			</form>

			<form className="flex gap-4 md:gap-6 pt-6">
				<input
					type="text"
					placeholder="Business Name"
					className="w-[180px] md:w-[400px] h-[40px] border border-gray-200 rounded-md px-4 bg-transparent focus:outline-gray-300"
				/>
				<input
					type="text"
					placeholder="Website"
					className="w-[180px] md:w-[400px] h-[40px] border border-gray-200 rounded-md px-4 bg-transparent focus:outline-gray-300"
				/>
			</form>

			<div className="mt-6">
				<textarea
					name="Description"
					placeholder="Description"
					rows={5}
					cols={99}
					className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[800px] p-4 rounded-lg border border-gray-200 resize-y focus:outline-gray-300"
				/>
			</div>

			<button className="bg-[#ff9f1c] px-6 py-2 mt-5 text-white font-semibold rounded-full hover:bg-[#ffa527] transition duration-300">
				Submit
			</button>
		</div>
	);
};

export default BecomePartner;
