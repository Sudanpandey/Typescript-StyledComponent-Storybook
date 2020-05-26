import React, { ReactNode } from "react";

import { styled } from "src/theme";

interface FooterProps {
	sectionFirst: ReactNode;
	sectionSecond: ReactNode;
	sectionThird: ReactNode;
}

const Wrapper = styled.div`
	background-color: ${({
		theme: {
			colors: { background },
		},
	}) => background};
	display: flex;
	padding: 20px;
	justify-content: space-between;
`;
const Section = styled.div`
	width: 33%;
	padding: 0 20px;
`;

const Footer: React.FC<FooterProps> = ({
	sectionFirst,
	sectionSecond,    
	sectionThird,
}) => {
	return (
		<Wrapper>
			<Section>{sectionFirst}</Section>      
			<Section>{sectionSecond}</Section>
			<Section>{sectionThird}</Section>
		</Wrapper>
	);
};

export default Footer;
