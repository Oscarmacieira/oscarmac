import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./particle-config";
import styled from "styled-components";

export const ParticleBackground = () => {
	const particlesInit = async (main: any) => {
		console.log(main);
		await loadFull(main);
	};
	console.log("Particles dude");
	return (
		<ParticleBox>
			<Particles
				init={particlesInit}
				params={ParticlesConfig}
				canvasClassName="squares-anim"
			></Particles>
		</ParticleBox>
	);
};

const ParticleBox = styled.div`
	position: absolute !important;
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;

	#tsparticles {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		white-space: nowrap;
		.squares-anim  {
			position: absolute !important;
			width: 100%;
			height: 100% !important;
			top: 0;
			left: 0;
		}
	}
`;
