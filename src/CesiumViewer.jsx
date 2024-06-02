import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Viewer,
	ClockViewModel,
	Cartesian3,
	Color,
	AnimationViewModel,
	Ion,
	Math,
} from "cesium";
import "./App.css";
import "./CesiumTimeline.css";

Ion.defaultAccessToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMDI0ZTdiMi1hYWE2LTRmMjMtYWY3My1jZGZiNDNlNjVmNDYiLCJpZCI6MjA1MzIwLCJpYXQiOjE3MTE3MTM5MzF9.m7FHDe9QiaJ4sb3h1YbnoYRxBKCMAaUgHOe480A8Gbw";

const Cesium3DViewer = () => {
	useEffect(() => {
		const clockViewModel = new ClockViewModel();
		const options3D = {
			fullscreenButton: true,
			sceneModePicker: true,
			clockViewModel: clockViewModel,
		};

		const view3D = new Viewer("cesiumContainer", options3D);

		view3D.camera.percentageChanged = 0.01;

		const Tajikistan = view3D.entities.add({
			polygon: {
				hierarchy: Cartesian3.fromDegreesArray([
					67.31918,
					41.030331, // Top left
					75.137547,
					41.030331, // Top right
					75.137547,
					37.171558, // Bottom right
					67.31918,
					37.171558, // Bottom left
				]),
				height: 0,
				material: Color.RED.withAlpha(0.5),
				outline: true,
				outlineColor: Color.BLACK,
			},
		});

		view3D.zoomTo(Tajikistan);

		// Get the central coordinates of Central Asia
		const centralAsiaCoordinates = Cartesian3.fromDegrees(67.31918, 41.030331);

		// Fly the camera to Central Asia
		view3D.camera.flyTo({
			destination: Cartesian3.fromDegrees(67.31918, 41.030331, 5000000), // Focus at a reasonable altitude
			orientation: {
				heading: 0.0,
				pitch: Math.toRadians(-45.0), // Tilt the camera to view from an angle
				roll: 0.0,
			},
			duration: 10, // Duration of the flight in seconds
		});

		return () => {
			view3D.destroy();
		};
	}, []);

	return (
		<div
			id='cesiumContainer'
			style={{ width: "fit-content", height: "1024px" }}
			// className='mb-20'
		>
			<button className=' absolute bg-black w-[100%] text-white'>
				<Link to={"/"}>Home Page</Link>
			</button>
		</div>
	);
};

export default Cesium3DViewer;
