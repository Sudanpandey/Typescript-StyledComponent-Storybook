import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

import { styled } from "src/theme";

interface IconProps {
	icon: IconProp;
	color?: string;
	size?: SizeProp;
	className?: string;     		
}

const Icon: React.FC<IconProps> = ({ color, size = "2x", icon, className }) => (
	<FontAwesomeIcon
		icon={icon}
		color={color}
		size={size}
		className={className}
	/>
);

export default Icon;
