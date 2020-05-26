import React, { FC } from "react";

import { styled } from "src/theme";

import { Body } from "src/components";
interface BodyTypeOneProps {
	title: string;
	content: string;
}

const StyledBodyTypeOne = styled.div`
	border: 1px solid
		${({
			theme: {
				colors: { backgroundThird },
			},
		}) => backgroundThird};
	padding: 20px;

	.titleStyle {
		margin-bottom: 1rem;
	}
`;

const BodyTypeOne: React.FC<BodyTypeOneProps> = ({ title, content }) => {
	return (
		<StyledBodyTypeOne>
			<Body content={title} className="titleStyle" />
			<Body content={content} />
		</StyledBodyTypeOne>
	);
};

export default BodyTypeOne;
