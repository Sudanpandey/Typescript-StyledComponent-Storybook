import React, { FC } from "react";

import { styled } from "src/theme";

import { Body } from "src/components";
import {Image} from "src/components"
interface BodyTypeTwoProps {
	title: string;
	height?: string;
	width?: string;
    imageUrl: string;
    altText: string;       
    
}

const StyledBodyTypeTwo = styled.div`
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

const BodyTypeTwo: React.FC<BodyTypeTwoProps> = ({
	title,
	height ="600",
	width ="600",
    imageUrl,
    altText,
}) => {
	return (
		<StyledBodyTypeTwo >
			<Body content={title} className="titleStyle" />
            <Image height={height} width={width} imageUrl={imageUrl} altText={altText}/>
		</StyledBodyTypeTwo>
	);
};

export default BodyTypeTwo;
 