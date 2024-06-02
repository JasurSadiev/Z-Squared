import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "../Temp.css";

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const emailRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [email, password]);

	const handleSubmit = () => {
		navigate("/");
	};

	return (
		<div className='Login w-screen h-screen bg-[dodgerblue]'>
			<section className='text-white mx-auto'>
				<p
					ref={errRef}
					className={errMsg ? "errmsg" : "offscreen"}
					aria-live='assertive'
				>
					{errMsg}
				</p>
				<h1>Sign In</h1>
				<form>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						ref={emailRef}
						autoComplete='off'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required
					/>

					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						id='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
					<button
						onClick={handleSubmit}
						className='bg-white text-black w-[fit-content] py-1 mt-4 px-4'
					>
						Sign In
					</button>
				</form>
				<p className=''>
					<Link to={"/register"} className='underline'>
						Need an Account?
					</Link>
				</p>
			</section>
		</div>
	);
};

export default Login;
