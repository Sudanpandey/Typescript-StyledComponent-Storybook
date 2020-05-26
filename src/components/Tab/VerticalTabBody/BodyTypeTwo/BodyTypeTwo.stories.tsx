import * as React from "react";
import { storiesOf } from "@storybook/react";

import BodyTypeTwo from ".";

storiesOf("TabBodyTypeTwo", module).add("BodyImage", () => {
	return (
		<BodyTypeTwo
			title="One"
			imageUrl="https://www.internations.org/seo-assets/static/713c7f0b172c0c6a84f5c5c461a14aeb/6e20c/Pokhara.jpg"
			altText=" Pokhara"
		/>
	);
});




