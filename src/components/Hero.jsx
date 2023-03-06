import "../scss/Hero.scss";
import { IoCalendarOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { dashStats as stat } from "../data/Data";
import { useState } from "react";

const Hero = () => {
	const [dashStats, setDashStats] = useState(stat);

	const handleStatClick = (id) => {
		const X = dashStats.map((item) => {
			return item.id === id
				? { ...item, state: true }
				: { ...item, state: false };
		});
		setDashStats(X);
	};

	return (
		<section className="hero-section">
			<div className="hero-top">
				<div className="welcome-box">
					<div className="welcome-image-box">
						<img src="/img.jpg" alt="image" />
					</div>
					<div className="welcome-head-box">
						<h1>Hello Marcus! 👋</h1>
						<small>We hope you're having a great day</small>
					</div>
				</div>
				<div className="welcome-calender-box">
					<IoCalendarOutline />
					<span className="text-sm">Today</span>
					<BsChevronDown />
				</div>
			</div>
			<div className="line-through" />
			<div className="dash-stats">
				{dashStats.map((item) => (
					<div
						key={item.id}
						className={`stat-box ${item.state ? "active" : ""}`}
						onClick={() => handleStatClick(item.id)}>
						<div className="stat-icon">{item.icon}</div>
						<div className="stat-head">
							<h3>{item.head}</h3>{" "}
							<small className="small-green">{item.stat} </small>
						</div>
						<h1 className="stat-figure">{item.numbers} </h1>
						<span className="stat-amount"> {item.amount} </span>{" "}
					</div>
				))}{" "}
			</div>
		</section>
	);
};

export default Hero;
