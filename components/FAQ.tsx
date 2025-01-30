import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
	return (
		<div className="bg-gray-100 mx-auto pb-20 pt-5 md:pt-10">
			<h2 className="text-center text-[20px] sm:text-[20px] md:text-[30px] font-bold text-black">
				FAQ
			</h2>
			<div className="max-w-6xl mx-auto mt-2 mb-5">
				<p className="text-center text-gray-400 text-[16px] sm:text-[18px] md:text-[20px]">
					Got a question? We&#39;re here to answer.
				</p>
			</div>
			<Accordion
				type="single"
				collapsible
				className="max-w-sm md:max-w-2xl mx-auto"
			>
				<AccordionItem value="item-1">
					<AccordionTrigger>About Lovetrain</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare
						mollis nunc nec aliquam. Cras pretium, felis ac ornare mollis, sem
						dui ullamcorper enim, tristique tincidunt est dui in risus.
						Vestibulum luctus erat eget nulla vulputate, a lobortis elit
						ultricies. Proin non vestibulum lacus. Fusce volutpat mauris mi, sed
						interdum sem dignissim in. Morbi ac luctus felis. Nullam id risus
						pharetra, feugiat ante id, lobortis turpis.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Donation</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare
						mollis nunc nec aliquam. Cras pretium, felis ac ornare mollis, sem
						dui ullamcorper enim, tristique tincidunt est dui in risus.
						Vestibulum luctus erat eget nulla vulputate, a lobortis elit
						ultricies. Proin non vestibulum lacus.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Fundraising Page</AccordionTrigger>
					<AccordionContent>
						Fusce volutpat mauris mi, sed interdum sem dignissim in. Morbi ac
						luctus felis. Nullam id risus pharetra, feugiat ante id, lobortis
						turpis.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-4">
					<AccordionTrigger>Profile</AccordionTrigger>
					<AccordionContent>
						Fusce volutpat mauris mi, sed interdum sem dignissim in. Morbi ac
						luctus felis. Nullam id risus pharetra, feugiat ante id, lobortis
						turpis.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-5">
					<AccordionTrigger>Winners and Prize</AccordionTrigger>
					<AccordionContent>
						Fusce volutpat mauris mi, sed interdum sem dignissim in. Morbi ac
						luctus felis. Nullam id risus pharetra, feugiat ante id, lobortis
						turpis.
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<div className="max-w-6xl mx-auto mt-8">
				<p className="text-center text-black text-[15px] sm:text-[17px] md:text-[18px]">
					If you don&#39;t see your question here, please drop us a message at <a href="mailto:info@charifun.com" className="text-[#ff9f1c] ">info@charifun.com</a>
				</p>
			</div>
		</div>
	);
};

export default FAQ;
