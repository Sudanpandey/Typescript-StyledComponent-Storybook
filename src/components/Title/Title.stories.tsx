import * as React from "react";
import { storiesOf } from "@storybook/react";

import Title from ".";

storiesOf("Title", module).add("primary", () => {
	return <Title type="primary" content="AWA" />;
});

storiesOf("Title", module).add("quaternary", () => {
	return <Title type="quaternary" content="Inspires" />;
});

storiesOf("Title", module).add("secondary", () => {
	return <Title type="secondary" content="Quick Links" />;
});

storiesOf("Title", module).add("tertiary", () => {
	return <Title type="tertiary" content="Contact Us" />;
});
