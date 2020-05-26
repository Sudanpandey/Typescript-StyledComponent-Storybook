import React, { FC } from "react";

import { styled } from "src/theme";
import { TabItem } from "src/components";

interface VerticalTabProps {
	items: string[];
	selectedItem: string;
	onClick: (item: string) => void;
	className?: string;
}
const StyledVerticalTab = styled.ul`
	border: 1px solid
		${({
			theme: {
				colors: { backgroundThird },
			},
		}) => backgroundThird};
`;

const VerticalTab: React.FC<VerticalTabProps> = ({
	items,
	selectedItem,
	onClick,
	className,
}) => (
	<StyledVerticalTab className={className}>
		{items.map((item) => {
			return (
				<TabItem
					key={item}
					item={item}
					selectedItem={selectedItem}
					onClick={(item) => onClick(item)}
				/>
			);
		})}
	</StyledVerticalTab>
);
export default VerticalTab;
