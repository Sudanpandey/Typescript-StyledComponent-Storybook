import React, { ReactNode, FC } from "react";

import { styled } from "src/theme";

import { VerticalTab } from "src/components";

interface VerticalTabAndBodyProps {
	items: string[];
	selectedItem: string;
	onClick: (item: string) => void;
	body: ReactNode;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
    width: 100%;

	.tabStyle {
		width: 30%;
	}
`;

const BodyWrapper = styled.div`
	width: 70%;
`;

const VerticalTabAndBody: FC<VerticalTabAndBodyProps> = ({
	items,
	selectedItem,
	onClick,
	body,
}) => {
	return (
		<Wrapper>
			<VerticalTab
				items={items}
				selectedItem={selectedItem}
				onClick={(item) => onClick(item)}
				className="tabStyle"
			/>

			<BodyWrapper>{body}</BodyWrapper>
		</Wrapper>
	);
};

export default VerticalTabAndBody;
