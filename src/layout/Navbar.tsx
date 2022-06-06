import styled from "styled-components";
import { Logo } from "../components/branding/Logo";
import { NavLink, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useEffect, useState } from "react";
import { useCategories } from "../services/Moralis/Categories";
import { useBetween } from "use-between";
import { TerminalContext } from "../hooks/useTerminalLog";
type MenuItem = {
	name: string;
	href: string;
	selected?: boolean;
	sublink?: object;
};

export const Navbar = () => {
	const { printToConsole } = useContext(TerminalContext);
	const { pathname } = useLocation();
	function changeDirectory(dir: string) {
		const traj = dir === "HOME" ? "/" : dir.toLowerCase();
		if (pathname === "/") {
			return `${traj}`;
		} else {
			switch (traj) {
				case "/":
					return `/`;
					break;
				default:
					return `../${traj}`;
			}
		}
	}
	const menus: MenuItem[] = [
		{
			name: "/",
			href: "/",
		},
		{
			name: "SKILLS",
			href: "/skills",
		},
		{
			name: "EXPERIENCE",
			href: "/experience",
		},
		{
			name: "CONTACT",
			href: "/contact",
		},

		// {
		//   name: "EXPLORE",
		//   href: "/projects",
		//   sublink: [
		//     {
		//       name: "Programming & Tech",
		//       href: "/",
		//     },
		//     {
		//       name: "METAVERSE",
		//       href: "/",
		//     },
		//     {
		//       name: "PRODUCTION",
		//       href: "/",
		//     },
		//   ],
		// },
		// {
		//   name: "ABOUT",
		//   href: "/about",
		// },
	];

	const selectedMenuItem = menus.find(({ href }) => href === pathname);
	if (selectedMenuItem) selectedMenuItem.selected = true;

	return (
		<>
			{" "}
			<div style={{ zIndex: 2, width: "100%" }}>
				<Header>
					{" "}
					<nav>
						{menus.map((menu, key) => {
							return (
								<NavLink
									to={menu.href}
									onClick={() =>
										printToConsole(`> cd ${changeDirectory(menu.name)}`)
									}
									className={
										`flex text-center justify-center align-items-center btnNav ` +
										(menu.selected !== undefined ? "selected" : "")
									}
									key={key}
								>
									{menu.name}
								</NavLink>
							);
						})}
					</nav>
					<hr />
				</Header>
			</div>
		</>
	);
};

const Header = styled.div`
	display: flex;
	margin-bottom: 50px;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	align-items: center;
	background: transparent;
	padding: 15px;
	padding-bottom: 5px;
	padding-inline: 50px;
	hr {
		background: rgb(255, 255, 255);
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 30%,
			rgba(255, 255, 255, 1) 50%,
			rgba(255, 255, 255, 0) 70%
		);
		height: 1px;
		width: 100%;
		border: none;
	}

	nav {
		padding-top: 50px;
		padding-bottom: 20px;
		display: flex;
		gap: 20px;
		align-items: center;
		width: fit-content;
	}

	.btnNav {
		color: white;
		opacity: 0.6;
		cursor: pointer;
		background-image: linear-gradient(
			to right,
			${({ theme }) => theme.palette.color1},
			${({ theme }) => theme.palette.color1} 50%,
			#ffffff 50%
		);
		background-size: 200% 100%;
		background-position: -100%;
		width: fit-content;
		padding: 5px 0;
		position: relative;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: all 0.3s ease-in-out;
		:before {
			content: "";
			background: ${({ theme }) => theme.palette.color1};

			display: block;
			position: absolute;
			bottom: -3px;
			left: 0;
			width: 0;
			height: 3px;
			transition: all 0.3s ease-in-out;
		}

		:hover {
			background-position: 0;
		}

		:hover::before {
			width: 100%;
		}
	}

	.selected {
		opacity: 1;
		color: red;
	}

	@keyframes openModal {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes closeModal {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
`;
