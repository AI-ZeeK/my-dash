import React from "react";
import { activityFeed } from "../data/Data";
import { BsCheck2All, BsChevronDown } from "react-icons/bs";
import { RiFlashlightFill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { IoIosAlert, IoIosChatbubbles } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import "../scss/Activity.scss";
import { HiCurrencyDollar } from "react-icons/hi2";
const Activity = () => {
	return (
		<section className="activity-section">
			<div className="card-box">
				<div className="card-head">
					<div className="head-box">
						<RiFlashlightFill className="icon" />
						<h2>Activity Feed</h2>
					</div>
					<div className="act-box">
						<span>All Activity</span>
						<BsChevronDown />
					</div>
				</div>
				<div className="line-through" />
				<div>
					{activityFeed.map((item) => (
						<div key={item.id} className="activity-box">
							<div className="activity-image">
								<img src={item.img} alt="" />
							</div>
							<div className="activity-message">
								<p>{item.message}</p>
								<small>{item.time}</small>
							</div>
							<div className="activity-status">{item.status}</div>
						</div>
					))}
				</div>
			</div>
			<div className="card-box">
				<div className="card-head">
					<div className="head-box">
						<HiUser className="icon" />
						<h2>Customer Behaviour</h2>
						<IoIosAlert className="dis-icon" />
					</div>
					<div className="act-box">
						<IoCalendarOutline />
						<span className="text-sm">Today</span>
						<BsChevronDown />
					</div>
				</div>
				<div className="line-through" />
				<div className="behaviour-block">
					<div className="behaviour-box">
						<div className="icon-box">
							<BsCheck2All className="icon" />
						</div>

						<div className="behaviour-desc">
							<h1>2492 </h1>
							<small>Conversations</small>
						</div>
					</div>
					<div className="behaviour-box">
						<div className="icon-box">
							<IoIosChatbubbles className="icon" />
						</div>

						<div className="behaviour-desc">
							<h1>392 </h1>
							<small>SMS Sent</small>
						</div>
					</div>
					<div className="behaviour-box">
						<div className="icon-box">
							<HiCurrencyDollar className="icon" />
						</div>

						<div className="behaviour-desc">
							<h1>$97k </h1>
							<small>revenue</small>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Activity;
