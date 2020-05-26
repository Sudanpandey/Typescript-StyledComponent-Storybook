import baseStyled, { ThemedBaseStyledInterface } from "styled-components";

const colors = {
	primary: "#2B8285",
	buttonPrimary: "#90CAF9",
	buttonSecondary: "#F38FB1",
	buttonTertiary: "#3C3C3C",

	secondary: "green",
	tertiary: "red",
	quaternary: "black",
	white: "#ffffff",
	green: "green",
	blue: "blue",
	background: "#313036",
	backgroundSecond: "#f9f9f9",
	backgroundThird: "#E6E6E6",
	border: "#b3aeae",
	hover: "#f1f1f1",
};

export const theme = {
	colors,
};

export type Theme = typeof theme;

export const styled = baseStyled as ThemedBaseStyledInterface<Theme>;
