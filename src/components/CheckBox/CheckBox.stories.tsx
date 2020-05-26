import * as React from "react";
import { storiesOf } from "@storybook/react";

import CheckBox from ".";

storiesOf("CheckBox", module).add("default", () => {
	const [checked, setChecked] = React.useState<boolean>(false);

	const handleChange = ({target: { checked }}: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(checked);
	};
	return (
		<CheckBox
			label="I have a Bike"
			checked={checked}
			onChange={handleChange}
		/>
	);
});
