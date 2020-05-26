import * as React from "react";

import { styled } from "src/theme";

interface ListItemProps {
	items: string[];       
}

const StyledUnorderedList = styled.ul``;
const StyledList = styled.li`
	color: ${({
		theme: {
			colors: { white },
		},
	}) => white};
`;

const Title: React.FC<ListItemProps> = ({ items }) => (
	<StyledUnorderedList>
		{items.map((item) => {
			return <StyledList key={item}>{item}</StyledList>;
		})}
	</StyledUnorderedList>
);   

export default Title;

