import * as React from "react";
import { storiesOf } from "@storybook/react";

import Body from ".";

storiesOf("Body", module).add("default", () => {
	return ( 
		<Body content="AwaInspires is a functional Blog concelved for the purpose of a tutorials on
		  YouTube.However,Awa has a blog called pieceofadvice.org where he writes truly inspiring stuff." color="blue" />
	);
});
