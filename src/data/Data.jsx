import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoChatbubblesOutline, IoTimer } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";
import { GiChart } from "react-icons/gi";
import { IoIosChatbubbles } from "react-icons/io";
import { AiFillCaretRight } from "react-icons/ai";
import { CiTimer } from "react-icons/ci";
import { TbBrandHipchat } from "react-icons/tb";
import { FaDotCircle } from "react-icons/fa";

export const dashStats = [
	{
		id: 1,
		state: true,
		icon: <BsBarChart />,
		head: "Total Revenue",
		numbers: "$43,871",
		stat: "+15%",
		amount: "402 Orders",
	},
	{
		id: 2,
		state: false,
		icon: <HiOutlineUserGroup />,
		head: "Subscribers",
		numbers: "2,293",
		stat: "+12.3%",
		amount: "$56 Lifetime Value",
	},
	{
		id: 3,
		state: false,
		icon: <IoChatbubblesOutline />,
		head: "Conversations",
		numbers: "2375",
		stat: "-0.78%",
		amount: "312 Clicks",
	},
	{
		id: 4,
		state: false,
		icon: <GiChart />,
		head: "Popup Sales",
		numbers: "$645",
		stat: "+3%",
		amount: "12% Conversion",
	},
];

export const activityFeed = [
	{
		id: 1,
		img: "/mma.gif",
		message: (
			<p>
				Olakunlue Alabi bought <strong>"IPhone 13 pro max"</strong> for{" "}
				<strong>$1,399</strong>
			</p>
		),
		time: "5 mins ago",
		status: "Purchased",
	},
	{
		id: 2,
		img: "/mma.gif",
		message: (
			<p>
				Murphy Usifo replied with <strong>"Hi, i am looking for ...."</strong>
			</p>
		),
		time: "25 mins ago",
		status: "Purchased",
	},
	{
		id: 3,
		img: "/mma.gif",
		message: (
			<p>
				Oguz Yagiz clicked on a <strong>Popup</strong> link
			</p>
		),
		time: "2 days ago",
		status: "Purchased",
	},
];
export const subscribe = [
	{
		id: 1,
		head: "Overview",
		level: "2/8 session completed",
		icon: <TbBrandHipchat />,
		min1: "15min",
		min2: "45min",
		tag: "Easy",
		msg: "BlueReceipt is designed to maximize your eCommerce revenue with best in class features, Learn how they work",
		btn: "Get Started",
		btnicon: <AiFillCaretRight />,
		timer: <IoTimer />,
	},
	{
		id: 2,
		head: "Overview",
		level: "2/8 session completed",
		icon: <IoIosChatbubbles />,
		min1: "15min",
		min2: "45min",
		tag: "Medium",
		msg: "BlueReceipt is designed to maximize your eCommerce revenue with best in class features, Learn how they work",
		btn: "Get Started",
		btnicon: <AiFillCaretRight />,
		timer: <CiTimer />,
	},
	{
		id: 3,
		head: "Overview",
		level: "2/8 session completed",
		icon: <FaDotCircle />,
		min1: "15min",
		min2: "45min",
		tag: "Medium",
		msg: "BlueReceipt is designed to maximize your eCommerce revenue with best in class features, Learn how they work",
		btn: "Get Started",
		btnicon: <AiFillCaretRight />,
		timer: <CiTimer />,
	},
];
