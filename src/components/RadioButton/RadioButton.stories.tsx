import * as React from "react";
import { storiesOf } from "@storybook/react";

import RadioButton from ".";

storiesOf("RadioButton", module).add("default", () => {
	const handleChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		console.log({ value });
	};
	return (
		<>
			<RadioButton
				name="gender"
				label="Male"
				value="male"
				checked={true}
				onChange={handleChange}
			/>
			<RadioButton
				name="gender"
				label="Female"
				value="female"
				onChange={handleChange}
			/>
			<RadioButton
				name="gender"
				label="Other"
				value="other"
				onChange={handleChange}
			/>
		</>
	);
});
