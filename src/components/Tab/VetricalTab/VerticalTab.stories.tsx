import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import VerticalTab from ".";

storiesOf("VerticalTab", module).add("normal", () => {
	const [selectedItem, setSelectedItem] = useState<string>("First");

	const handleClick = (item) => {
        setSelectedItem(item);
           
	};
 
	return (
		<VerticalTab
			items={["First", "Second", "Third","Fourth","Fifth"]}
			selectedItem={selectedItem}
			onClick={(item) => handleClick(item)}
		/>
	);
});

