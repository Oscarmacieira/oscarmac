import { SphereAnim } from "../../anim/SphereAnim/SphereAnim";
import { Card } from "../../components/Card";
import { Container } from "../../layout/Container";

export const Contact = () => {
	return (
		<Container>
			<Card
				style={{
					marginInline: "auto",
					width: "fit-content",
					height: 500,
				}}
			>
				<SphereAnim />
				<div className="flex-column align-items-center">
					<h1>Click here to write me an email!</h1>
					<p>Or you can also reach through social medias:</p>
				</div>
			</Card>
		</Container>
	);
};
