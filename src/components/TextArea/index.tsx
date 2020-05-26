import * as React from "react";

import { styled } from "src/theme";
import { Body } from "src/components";

interface TextAreaProps {
	type: "text" | "number";
	border?: "normal" | "rounded";
	status?: "default" | "success" | "error";
	name: string;
	inputLabel: string;
	errorMessage?: string;
	value: string;
	placeHolder: string;
	className?: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const StyledTextArea = styled.textarea<TextAreaProps>`
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
	width: 100%;
	height: 100px;
	outline: none;
`;

const TextArea: React.FC<TextAreaProps> = ({
	type,
	name,
	inputLabel,
	border = "normal",
	status = "default",
	errorMessage,
	value,
	placeHolder,
	className,
	handleChange,
	handleBlur,
}) => (
	<>
		<Body content={inputLabel} color={errorMessage ? "red" : "black"} />
		<StyledTextArea
			type={type}
			name={name}
			border={border}
			status={status}
			value={value}
			placeholder={placeHolder}
			className={className}
			onChange={handleChange}
			onBlur={handleBlur}
		/>
		<Body content={errorMessage} color="red" />
	</>
);

export default TextArea;
