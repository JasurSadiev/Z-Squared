import React from "react";
import { Link } from "react-router-dom";

import Terra from "../assets/logo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Navbar = () => {
	return (
		<div className='bg-white flex shadow-2xl h-16 w-screen overflow-x-hidden'>
			<img src={Terra} alt='' />
			<div className='flex ml-48 justify-between gap-x-10 my-auto'>
				<span>
					<Link to='/dashboard'>Dashboard</Link>
				</span>
				<span>Map</span>
				<span>Blogs</span>
				<span>Contacts</span>
			</div>
			<div className='ml-auto self-center mr-32'>
				<AccountCircleIcon className='' fontSize='large' />
			</div>
			<div className='self-center flex gap-x-4 mr-4'>
				<InstagramIcon className='text-pink-500' />
				<TelegramIcon className='text-blue-900' />
				<YouTubeIcon className='text-red-600' />
			</div>
		</div>
	);
};

export default Navbar;
