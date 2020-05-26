import * as React from "react";
import { storiesOf } from "@storybook/react";

import DropDown from ".";

storiesOf("DropDown", module).add("default", () => {
	return <DropDown content="Number" options={["one", "two", "three"]} />;
});
