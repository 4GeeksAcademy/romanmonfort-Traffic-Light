import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Semaforo from "./semaforo";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center align-items-center">
			<Semaforo/>
		</div>
	);
};

export default Home;
