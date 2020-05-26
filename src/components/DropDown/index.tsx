import * as React from "react";
import { styled } from "src/theme";

interface DropDownProps {
	content: string;
	options: string[];
	// onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	// onSelectItem?: (item: number) => void;
}

const Wrapper = styled.div`
	div&:hover {
		.showList {
			display: block !important;
		}
	}
`;  	

const Section = styled.div`
	color: ${({
		theme: {
			colors: { white },
		},
	}) => white};
	background-color: ${({
		theme: {
			colors: { green },
		},
	}) => green};
	text-align: center;

	padding: 7px 10px;
`;

const List = styled.ul`
	list-style-type: none;
	padding: 6px 0px;
	background-color: ${({
		theme: {
			colors: { backgroundSecond },
		},
	}) => backgroundSecond};

	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;

	display: none;
`;

const Item = styled.li`
	padding: 8px 0px;
	color: #666;
	font-size: 16px;
	text-align: center;   
	cursor: pointer;

	&:hover {
		background-color: ${({
			theme: {
				colors: { hover },
			},
		}) => hover};
	}
`;

const DropDown: React.FC<DropDownProps> = ({ content, options }) => {
	return (
		<Wrapper>
			<Section>{content}</Section>
			<List className="showList">
				{options.map((option) => {
					return <Item key={option}>{option}</Item>;
				})}
			</List>
		</Wrapper>
	);
};

export default DropDown;
