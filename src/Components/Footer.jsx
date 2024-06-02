import React from "react";
import Terra from "../assets/logo.svg";

const Footer = () => {
	return (
		<div className='flex justify-between mx-10 text-center pb-10'>
			<img src={Terra} alt='' className='w-[200px]' />
			<div className='flex flex-col'>
				<h2 className='text-2xl font-semibold'>Doormat navigation</h2>
				<span>Home</span>
				<span>Maps</span>
				<span>Blogs</span>
				<span>Login</span>
			</div>
			<div className='flex flex-col'>
				<h2 className='text-2xl font-semibold'>Contact</h2>
				<span>Address</span>
				<span>Phone Number</span>
				<span>Email</span>
			</div>
			<div className='flex flex-col'>
				<h2 className='text-2xl font-semibold'>Follow Us On</h2>
				<span>Instagram</span>
				<span>Facebook</span>
				<span>Twitter</span>
			</div>
		</div>
	);
};

export default Footer;
