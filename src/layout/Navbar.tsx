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
			name: "SKILLS",
			href: "/skills",
		},
		{
			name: "EXPERIENCE",
			href: "/experience",
		},
		{
			name: "PORTFOLIO",
			href: "/portfolio",
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
					<div
						style={{ width: "100%", display: "flex", justifyContent: "center" }}
					>
						<NavLink
							to={"/"}
							onClick={() => printToConsole(`> cd /`)}
							className={
								`flex text-center justify-center align-items-center btnNav ` +
								(pathname === "/" ? "selected" : "")
							}
						>
							/
						</NavLink>
					</div>
					<nav>
						{menus.map((menu, key) => {
							return (
								<NavLink
									to={menu.href}
									onClick={() =>
										printToConsole(`> cd ${changeDirectory(menu.name)}`)
									}
									className={
										menu.selected === undefined
											? "flex text-center justify-center align-items-center btnNav folder"
											: "flex text-center justify-center align-items-center btnNav folder selected"
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
  padding-top:30px;	display: flex;
	margin-bottom: 17px;
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
		padding-top: 20px;
		padding-bottom: 20px;
		display: flex;
		gap: 20px;
		align-items: center;
		width: fit-content;
	}

	.btnNav {
 font-size:0.9rem;
		opacity: 0.8;
		position: relative;
    color: ${({ theme }) => theme.palette.contrast};
    &:hover {opacity:1;}
	}
  .folder {

		&:nth-child(1):before {
			content: "";
			position: absolute;
			border-left:0.5px solid ${({ theme }) => theme.palette.contrast};
			border-top 0.5px solid ${({ theme }) => theme.palette.contrast};
			left:50%;
			top: -30px;
			height: 20px;
      width: 120px;
      opacity:0.5;
		}	&:nth-child(2):before {
			content: "";
			position: absolute;
      opacity:0.5;
      border-left:0.5px solid ${({ theme }) => theme.palette.contrast};
			left:50%;
			top: -29.5px;
			height: 19.5px;
			width: 1px;
		}


		&:nth-child(4):before {
			content: "";
			position: absolute;
      opacity:0.5;
			border-right:0.5px solid ${({ theme }) => theme.palette.contrast};
			border-top 0.5px solid ${({ theme }) => theme.palette.contrast};
			right:50%;
			top: -30px;
			height: 20px;
			width: 120px;
		}	&:nth-child(3):before {
			content: "";
			position: absolute;
      border-left:0.5px solid ${({ theme }) => theme.palette.contrast};
			right:50%;
      opacity:0.5;
			top: -29.5px;
			height: 19.5px;
			width: 1px;
		}

	}
  .selected {
    color:${({ theme }) => theme.palette.color1};
    opacity:1;
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
