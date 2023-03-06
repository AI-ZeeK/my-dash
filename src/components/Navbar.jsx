import "../scss/Navbar.scss";
import { TbBrandHipchat } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import { RiSearch2Fill } from "react-icons/ri";
import { HiOutlinePlus } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleNavOpen = () => {
		setIsNavOpen((prev) => !prev);
	};
	return (
		<nav className={`${isNavOpen ? "navbar active" : "navbar"}`}>
			<div className="nav-box logo-box">
				<TbBrandHipchat className="nav-logo" />
				<span>BlueReceipt</span>
			</div>
			<ul className="nav-box nav-items">
				<li>BlueChat</li>
				<li>Autopilots</li>
				<li>
					<span> Autopilot </span> <AiFillCaretDown />
				</li>
				<li>People</li>
			</ul>
			<div className="nav-box nav-info">
				<li>
					<RiSearch2Fill className="info-icon" />{" "}
				</li>
				<li>
					<IoNotifications className="info-icon" />{" "}
				</li>
				<button className="btn btn-box">
					<HiOutlinePlus size={18} />
					<span>Create</span>
				</button>

				<li className="profile-image-box">
					<span className="profile-image">
						<img src="/img.jpg" alt="" />{" "}
					</span>
					<span>
						<AiFillCaretDown />
					</span>
				</li>
			</div>
			<div className="mobile menu-bar" onClick={handleNavOpen}>
				<HiOutlineBars3BottomRight className="icon" />
			</div>
		</nav>
	);
};

export default Navbar;
