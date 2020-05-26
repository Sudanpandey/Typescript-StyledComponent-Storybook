import * as React from "react";
import { storiesOf } from "@storybook/react";

import {
	faFacebookSquare,
	faInstagramSquare,
	faTwitterSquare,
	faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import Icon from ".";

storiesOf("Icon", module).add("Facebook", () => {
	return <Icon icon={faFacebookSquare} color="blue" />;
});

storiesOf("Icon", module).add("Instagram", () => {
	return <Icon icon={faInstagramSquare} color="#DB4B78" />;
});

storiesOf("Icon", module).add("Twitter", () => {
	return <Icon icon={faTwitterSquare} color="#1DA1F2" />;
});

storiesOf("Icon", module).add("Youtube", () => {
	return <Icon icon={faYoutubeSquare} color="red" />;
});
