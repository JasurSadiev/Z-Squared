import React from "react";
import Cesium3DViewer from "./CesiumViewer";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
	return (
		<div className='app'>
			<Router>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/dashboard' element={<Cesium3DViewer />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
