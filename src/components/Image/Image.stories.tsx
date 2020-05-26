import * as React from "react";
import { storiesOf } from "@storybook/react";

import Image from ".";

storiesOf("Image", module).add("square", () => {
	return (
		<Image
        imageUrl="https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg"

			altText=" Pokhara"
		/>
	);
});

storiesOf("Image", module).add("rounded", () => {
	return (
		<Image
			border="rounded"
			imageUrl="https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg"
			altText=" Pokhara"
		/>
	);
});   
