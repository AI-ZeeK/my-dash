import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chart from "./components/Chart";
import Activity from "./components/Activity";
import Final from "./components/Final";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
				<Chart />
				<Activity />
				<Final />
			</main>
		</div>
	);
}

export default App;
