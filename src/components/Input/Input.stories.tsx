import * as React from "react";
import { storiesOf } from "@storybook/react";
import Input from ".";

storiesOf("Input", module).add("default", () => {
	const [value, setValue] = React.useState("");
	return (
		<Input
			name="name"
			type="text"
			value={value}
			inputLabel="Email"
			errorMessage="Please enter your email"
			placeHolder="Your email address"
			handleChange={({ target: { value } }) => setValue(value)}
			handleBlur={(event) => {
				console.log(event);
			}}
		/>
	);
});

storiesOf("Input", module).add("rounded", () => {
	const [value, setValue] = React.useState("");
	return (
		<Input
			name="name"
			type="text"    
			border="rounded"
			value={value}
			inputLabel="Password"
			errorMessage="Please enter your password"
			placeHolder="Your password"
			handleChange={({ target: { value } }) => setValue(value)}
			handleBlur={(event) => {
				console.log(event);
			}}
		/>
	);
});

storiesOf("Input", module).add("disabled", () => {
	const [value, setValue] = React.useState("");
	return (
		<Input
			name="name"
			type="text"
			value={value}
			inputLabel="Email"
			placeHolder="Your email address"
			disabled
			handleChange={({ target: { value } }) => setValue(value)}
			handleBlur={(event) => {
				console.log(event);
			}}
		/>
	);
});

storiesOf("Input", module).add("success", () => {
	const [value, setValue] = React.useState("");
	return (
		<Input
			name="name"
			type="text"
			value={value}
			inputLabel="Email"
			status="success"
			placeHolder="Your email address"
			handleChange={({ target: { value } }) => setValue(value)}
			handleBlur={(event) => {
				console.log(event);
			}}
		/>
	);
});

storiesOf("Input", module).add("error", () => {
	const [value, setValue] = React.useState("");
	return (
		<Input
			name="name"
			type="text"
			value={value}
			inputLabel="Email"
			status="error"
			placeHolder="Your email address"
			handleChange={({ target: { value } }) => setValue(value)}
			handleBlur={(event) => {
				console.log(event);
			}}
		/>
	);
});
