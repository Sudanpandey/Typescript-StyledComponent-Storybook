import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from ".";

storiesOf("Button", module).add("primary", () => {
	return (
		<Button
			buttonText="Send"
			type="primary"
			border="rounded"
			size="large"
			onClick={console.log}
		/>
	);
});

storiesOf("Button", module).add("secondary", () => {
	return (
		<Button
			buttonText="Add"
			type="secondary"
			border="rounded"
			size="medium"
			onClick={() => {
				console.log;
			}}
		/>
	);
});

storiesOf("Button", module).add("tertiary", () => {
	return (
		<Button
			buttonText="Add"
			type="tertiary"
			size="small"
			onClick={() => {
				console.log;
			}}
		/>
	);
});
storiesOf("Button", module).add("rounded", () => {
	return (
		<Button
			buttonText="Add"
			border="rounded"
			type="quaternary"
			onClick={() => {
				console.log;
			}}
		/>
	);
});
storiesOf("Button", module).add("quaternary", () => {
	return (
		<Button
			buttonText="Add"
			type="quaternary"
			onClick={() => {
				console.log;
			}}
		/>
	);
});
