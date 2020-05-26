import * as React from "react";
import { storiesOf } from "@storybook/react";

import BodyTypeOne from ".";

storiesOf("TabBodyTypeOne", module).add("BodyText", () => {
	return <BodyTypeOne title="One" content="Check me out! I'm a super cool Tab panel with text content!" />;
});
