import * as React from "react";
import { styled } from "src/theme";

import { Body } from "src/components";

interface RadioButtonProps {
	checked?: true | false;
	name?: string;
	label: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const StyleRadioButton = styled.input`
	margin-right: 7px;
	cursor: pointer;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
	label,
	name,
	checked = false,
	onChange,
	value,
}) => {
	return (
		<Wrapper>
			<StyleRadioButton
				type="radio"
				name={name}
				value={value}
				defaultChecked={checked}
				onChange={onChange}
			/>
			<Body content={label} />
		</Wrapper>
	);
};

export default RadioButton;
