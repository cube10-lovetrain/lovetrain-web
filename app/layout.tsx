import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "ChariFun",
	description:
		"ChariFun - Connect with charitable causes and make giving back fun. Join our community platform where fundraising meets engagement, empowering donors and organizations to create meaningful impact together. Discover campaigns, track your contributions, and experience the joy of giving",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${poppins.variable} antialiased`}>
			<body className="font-poppins">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
