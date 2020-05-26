import * as React from "react";
import { storiesOf } from "@storybook/react";

import ListItem from ".";

storiesOf("ListItem", module).add("default", () => {
	return <ListItem items= { ["Events","Contact","Mentors","Galleries","Write for us","Terms and Conditions" ]} />;
});
