import * as React from "react";

import { styled } from "src/theme";

import { Body } from "src/components";

interface InputProps {
	type: "text" | "number" | "password";
	border?: "normal" | "rounded";
	status?: "default" | "success" | "error";
	name: string;
	value: string;
	placeHolder: string;
	disabled?: true | false;
	className?: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface InputComponentProps extends InputProps {
	inputLabel: string;
	errorMessage?: string;
}

const StyledInput = styled.input<InputProps>`
	width: 100%;
	padding: 5px 10px;
	border-style: none;
	border: 1px solid
		${({
			status,
			theme: {	
				colors: { border, green, tertiary },
			},
		}) =>
			status === "error"
				? tertiary
				: status === "success"
				? green
				: border};
	border-radius: ${({ border }) => (border === "rounded" ? "10px" : "0px")};
	outline: none;
`;

const Input: React.FC<InputComponentProps> = ({
	name,
	type,
	border = "normal",
	status = "default",
	inputLabel,
	errorMessage,
	value,
	placeHolder,
	disabled = false,
	className,
	handleChange,
	handleBlur,
}) => {
	return (
		<>
			<Body content={inputLabel} />
			<StyledInput
				type={type}
				border={border}
				status={status}
				name={name}
				value={value}
				placeholder={placeHolder}
				disabled={disabled}
				className={className}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Body content={errorMessage} color="red" />
		</>
	);
};

export default Input;
