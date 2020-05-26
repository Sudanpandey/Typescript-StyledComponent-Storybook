import * as React from "react";
import { storiesOf } from "@storybook/react";

import TabItem from ".";

storiesOf("TabItem", module).add("normal", () => {
	return (
		<TabItem
			item="First"
			selectedItem="Second"
			onClick={(item) => console.log(item)}
		/>
	);
});

storiesOf("TabItem", module).add("selected", () => {
	return (
		<TabItem
			item="Second"
			selectedItem="Second"
			onClick={(item) => console.log(item)}
		/>
	);
});
