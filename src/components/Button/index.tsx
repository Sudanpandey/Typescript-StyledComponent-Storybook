import * as React from "react";

import { styled } from "src/theme";

interface ButtonTypes {
	type: "primary" | "secondary" | "tertiary" | "quaternary";
	size?: "small" | "medium" | "large";
	border?: "normal" | "rounded";
}

interface ButtonProps extends ButtonTypes {
	buttonText: string;
	className?: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledButton = styled.button<ButtonTypes>`
	color: ${({
		theme: {
			colors: { white, buttonPrimary, buttonSecondary },
		},
		type,
	}) =>
		["primary", "secondary"].includes(type)
			? white
			: type === "tertiary"
			? buttonPrimary
			: buttonSecondary};
	padding: ${({ size }) =>
		size === "large"
			? "15px 60px"
			: size === "medium"
			? "10px 40px"
			: "10px 25px"};

	background-color: ${({
		theme: {
			colors: { buttonPrimary, buttonSecondary, white },
		},
		type,
	}) =>
		type === "primary"
			? buttonPrimary
			: type === "secondary"
			? buttonSecondary
			: white};
	border-radius: ${({ border }) => (border === "rounded" ? "10px" : "0px")};
	font-size: 25px;
	border: 2px solid
		${({
			type,
			theme: {
				colors: { buttonPrimary, buttonSecondary },
			},
		}) =>
			["primary", "tertiary"].includes(type)
				? buttonPrimary
				: buttonSecondary};
	cursor: pointer;
	outline: none;
`;

const Button: React.FC<ButtonProps> = ({
	onClick,
	border = "normal",
	size = "small",
	type = "white",
	buttonText,
	className,
}) => (
	<StyledButton
		onClick={onClick}
		type={type}
		className={className}
		border={border}
		size={size}
	>
		{buttonText}
	</StyledButton>
);

export default Button;
