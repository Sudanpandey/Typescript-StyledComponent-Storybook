import { configure, addDecorator } from "@storybook/react";

import { theme } from "../src/theme";
import { withThemeProvider } from "../src/utils/themeProvider";


addDecorator(withThemeProvider(theme));

const req = require.context("../src/components", true, /.stories.tsx$/);
function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
