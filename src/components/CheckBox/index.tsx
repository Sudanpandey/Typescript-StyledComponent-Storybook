import * as React from "react";
import { styled } from "src/theme";

import { Body } from "src/components";

interface CheckBoxProps {
	label: string;
	checked: true | false;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const StyleCheckBox = styled.input`
	margin-right: 7px;
	cursor: pointer;
`;

const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onChange }) => {
	return (
		<Wrapper>
			<StyleCheckBox
				type="checkbox"
				checked={checked}
				onChange={onChange}
			/>
			<Body content={label} />     
		</Wrapper>
	);		   
};

export default CheckBox;
