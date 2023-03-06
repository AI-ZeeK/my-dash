import React from "react";
import "../scss/Final.scss";
import { subscribe } from "../data/Data";
import { BsArrowRight } from "react-icons/bs";

const Final = () => {
	return (
		<section className="final-section">
			<div className="final-link-box">
				<h1>Blue University</h1>
				<div className="final-direct">
					<span>View All</span>
					<BsArrowRight />
				</div>
			</div>
			<div className="card-block">
				{/* <div class="circle">
					<div class="circle__spin">
						<svg className="svg1">
							<circle cx="50%" cy="50%" r="67px"></circle>
						</svg>
						<svg className="svg2">
							<circle cx="50%" cy="50%" r="67px"></circle>
						</svg></div>
    */}

				{/* </div>  */}
				{subscribe.map((item) => (
					<div className="card-box" key={item.id}>
						<div className="card-top">
							<div className="progress-box">
								<div className="svg">
									{" "}
									<svg
										className="svg3"
										xmlns="http://www.w3.org/2000/svg"
										width="80"
										height="80"
										viewBox="0 0 100 100">
										<defs>
											<linearGradient
												id="gradient"
												x1="0%"
												y1="0%"
												x2="0%"
												y2="100%">
												<stop offset="80%" stop-color="#ccc" />
												<stop offset="10%" stop-color="#1c68ff" />
											</linearGradient>
										</defs>
										<circle
											cx="50%"
											cy="50%"
											r="47"
											stroke="url(#gradient)"
											stroke-width="6"
											fill="none"
											transform="rotate(90 50 50)"
										/>
									</svg>
								</div>
								<div>{item.icon}</div>
							</div>
							<div className="progress-info">
								<div className="progress-level">{item.level}</div>
								<div className="level-time">
									<small className="level-icon">{item.timer}</small>
									<div>
										<span>{item.min1}</span>
										<span className="info-grey">/{item.min2}</span>{" "}
									</div>
								</div>
							</div>
						</div>
						<div className="card-middle">
							<div className="card-middle-top">
								<h3>{item.head} </h3>
								<small className="middle-tag">{item.tag} </small>
							</div>
							<div  className="middle-msg">{item.msg} </div>
						</div>
						<div className="card-bottom">
							<button type="" className="btn-box btn">
								{item.btnicon}
								<span>{item.btn} </span>
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Final;
