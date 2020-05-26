import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import VerticalTabAndBody from ".";
import { VerticalTabBodyOne, VerticalTabBodyTwo } from "src/components";

storiesOf("VerticalTabAndBody", module).add("normal", () => {
	const [selectedItem, setSelectedItem] = useState<string>("First");

	const handleClick = (item) => {
		setSelectedItem(item);
	}; 

	const bodies = {
		First: (
			<VerticalTabBodyOne
				title="One"
				content="Check me out! I'm a super cool Tab panel with text content!"
			/>
		),
		Second: (
			<VerticalTabBodyTwo
				title="Two"
				imageUrl="https://www.internations.org/seo-assets/static/713c7f0b172c0c6a84f5c5c461a14aeb/6e20c/Pokhara.jpg"
				altText=" Pokhara"
			/>
		),
		Third: (
			<VerticalTabBodyOne
				title="Three"
				content="Check me out! I'm a super cool Tab panel with text content!"
			/>
		),
		Fourth: (
			<VerticalTabBodyTwo
				title="Four"
				imageUrl="https://www.internations.org/seo-assets/static/713c7f0b172c0c6a84f5c5c461a14aeb/6e20c/Pokhara.jpg"
				altText=" Pokhara"
			/>
		),
		Fifth: (
			<VerticalTabBodyOne
				title="Five"
				content="Check me out! I'm a super cool Tab panel with text content!"
			/>
		),
	};

	return (
		<VerticalTabAndBody
			items={["First", "Second", "Third", "Fourth", "Fifth"]}
			selectedItem={selectedItem}
			onClick={(item) => handleClick(item)}
			body={bodies[selectedItem]}
		/>
	);
});
