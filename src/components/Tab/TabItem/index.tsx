import React, { FC } from "react";
import { styled } from "src/theme";

import { Body } from "src/components";

interface TabItemProps {
	item: string;
	selectedItem: string;
	onClick: (item: string) => void;
}
const StyledTabItem = styled.li<TabItemProps>`  
	padding: 1.25rem 1.5rem;
	background-color: ${({
		item,
		selectedItem,
		theme: {
			colors: { backgroundThird, white },
		},
	}) => (item === selectedItem ? backgroundThird : white)};

	cursor: pointer;
	list-style-type: none;
`;

const TabItem: React.FC<TabItemProps> = ({ item, selectedItem, onClick }) => (
	<StyledTabItem    
		item={item}
		selectedItem={selectedItem}
		onClick={() => onClick(item)}
	>           
		<Body content={item} />
	</StyledTabItem>
);

export default TabItem;
