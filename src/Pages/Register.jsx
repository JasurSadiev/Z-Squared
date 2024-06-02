import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const handleSubmit = () => {
		navigate("/");
	};

	return (
		<div className='Login w-screen h-screen bg-[dodgerblue]'>
			<section className='text-white mx-auto'>
				<h1>Sign Up</h1>
				<form>
					<label htmlFor='email'>Email:</label>
					<input type='email' id='email' autoComplete='off' required />

					<label htmlFor='password'>Password:</label>
					<input type='password' id='password' required />

					<label htmlFor='password'>Confirm Password:</label>
					<input type='password' id='password' required />
					<button
						onClick={handleSubmit}
						className='bg-white text-black w-[fit-content] py-1 mt-4 px-4'
					>
						Sign Up
					</button>
				</form>
				<p className=''>
					<Link to={"/login"} className='underline'>
						Already have an Account?
					</Link>
				</p>
			</section>
		</div>
	);
};

export default Register;
