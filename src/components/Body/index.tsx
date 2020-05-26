import * as React from "react";

import { styled } from "src/theme";

interface BodyTypes {
	color?: "black" | "white" | "red" | "blue";
	className?: string;
}

interface BodyProps extends BodyTypes {
	content: string;
}

const StyledBody = styled.p<BodyTypes>`
	font-size: 16px;
	color: ${({
		color,
		theme: {
			colors: { quaternary, white, tertiary, blue },
		},
	}) =>
		color === "black"
			? quaternary
			: color === "white"
			? white
			: color === "blue"
			? blue
			: tertiary};
`;

const Body: React.FC<BodyProps> = ({ color = "black", className, content }) => (
	<StyledBody color={color} className={className}>
		{content}
	</StyledBody>
);

export default Body;
