import * as React from "react";

import { styled } from "src/theme";

interface TitleTypes {
	type: "primary" | "secondary" | "tertiary" | "quaternary";
}

interface TitleProps extends TitleTypes {
	content: string;
}

const StyledTitle = styled.h1<TitleTypes>`
	font-size: ${({ type }) =>
		// ["primary", "quaternary"].includes(type)     
		type==="primary"||type==="quaternary"  
			? "24px"
			: type === "secondary"
			? "22px"
			: "20px"};
	color: ${({ 
		type,   
		theme: {
			colors: { blue, white },
		},
	}) => (type === "quaternary" ? blue : white)};
`;

const Title: React.FC<TitleProps> = ({ type, content }) => (
	<StyledTitle type={type}>{content}</StyledTitle>
);

export default Title;


