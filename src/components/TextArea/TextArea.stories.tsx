import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextArea from ".";

storiesOf("TextArea", module).add("default", () => {
	const [value, setValue] = React.useState("");
	return (
		<TextArea
			type="text"
			name="name"
			inputLabel="Message"
			value={value}
			placeHolder="Message..."
			handleChange={({ target: { value } }) => setValue(value)}
			handleBlur={(event) => {
				console.log(event);
			}}
		/>
	);
});

storiesOf("TextArea", module).add("rounded", () => {
	const [value, setValue] = React.useState("");
	return (
		<TextArea
			type="text"
			name="name"
			inputLabel="Message"
			border="rounded"
			errorMessage="Please enter your Text"
			value={value}
			placeHolder="Message..."
			handleChange={({ target: { value } }) => setValue(value)}
			handleBlur={(event) => {
				console.log(event);
			}}
		/>
	);
});
storiesOf("TextArea", module).add("Sucess", () => {
	const [value, setValue] = React.useState("");
	return (
		<TextArea
			type="text"
			name="name"
			inputLabel="Message"
			status="success"
			errorMessage="Please enter your Text"
			value={value}
			placeHolder="Message..."
			handleChange={({ target: { value } }) => setValue(value)}
			handleBlur={(event) => {
				console.log(event);
			}}
		/>
	);
});
storiesOf("TextArea", module).add("Error", () => {
	const [value, setValue] = React.useState("");
	return (
		<TextArea
			type="text"
			name="name"
			inputLabel="Message"
			status="error"
			errorMessage="Please enter your Text"
			value={value}
			placeHolder="Message..."
			handleChange={({ target: { value } }) => setValue(value)}
			handleBlur={(event) => {
				console.log(event);
			}}
		/>
	);
});
