import React from "react";
import Navbar from "../Components/Navbar";
import FakeImg from "../assets/fakeImage.svg";
import Thumbnail from "../assets/thumbnail.svg";
import Footer from "../Components/Footer";

const Home = () => {
	return (
		<div className='flex flex-col overflow-x-hidden h-fit'>
			<Navbar />
			<div className='flex mt-20 overflow-x-hidden'>
				<div className='flex flex-col w-1/2'>
					<h1 className='text-center text-3xl font-medium'>Open Data Events</h1>
					<p className='mt-20 font-medium text-center ml-10'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
						ipsa ex aut ab nostrum rem autem suscipit at illo quae!
					</p>
					<button className='mt-32 bg-black text-white w-32 mx-auto py-2 px-2'>
						button
					</button>
				</div>
				<div className='flex my-auto px-32 mt-10'>
					<img src={FakeImg} alt='' />
				</div>
			</div>
			<div className='flex mt-20 overflow-x-hidden'>
				<div className='flex flex-col my-auto mt-10'>
					<img src={FakeImg} alt='' />
					<button className='mt-32 bg-black text-white w-32 mx-auto py-2 px-2'>
						button
					</button>
				</div>
				<div className='flex flex-col w-1/2 mt-10 mr-10'>
					<h1 className='text-center text-3xl font-medium mt-10'>
						A New Generation of Satellite Imagery
					</h1>
					<p className='mt-20 font-medium text-center mr-10'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae id
						consequuntur culpa quaerat saepe eligendi voluptatem ad incidunt
						aut. Quis nulla eaque cumque, voluptatum sit minus laboriosam
						similique esse quaerat obcaecati facilis eveniet ipsam autem? Dicta
						odit temporibus, officiis, modi incidunt tempore tenetur est
						pariatur culpa voluptate omnis doloremque. Ipsam.
					</p>
				</div>
			</div>
			<div className='flex w-screen mt-10 bg-slate-600 mb-10 py-20'>
				<button className='bg-yellow-500 text-black font-bold w-4/5 mx-auto py-4'>
					Tools
				</button>
			</div>
			<div className='flex flex-col'>
				<p className='text-center w-1/4 mx-auto'>
					At our core, we adhere to a straightforward principle; to provide the
					most of updated images form satellites
				</p>
				<div className='flex mx-auto mt-10'>
					<img src={Thumbnail} alt='' />
					<img src={Thumbnail} alt='' />
					<img src={Thumbnail} alt='' />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
