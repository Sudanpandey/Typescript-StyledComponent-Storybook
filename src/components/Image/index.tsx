import * as React from "react";
import { styled } from "src/theme";

interface ImageProps {
	height?: string;
	width?: string;
    border?: "rounded" | "square";
	imageUrl?: string;  
	altText: string;             
}

const StyledImage = styled.img<ImageProps>`
	border: 1px solid
		${({
			theme: {
				colors: { border },
			},
		}) => border};
	border-radius: ${({ border }) => (border === "rounded" ? "50%" : "5px")};
`;

const Image: React.FC<ImageProps> = ({   
	height = "100",
	width = "100",
	border = "square",
    imageUrl,    

	altText,
}) => {
	return (
		<StyledImage
			height={height}
			width={width}
			src={imageUrl}
			border={border}
			altText={altText}
		/>
	);
};

export default Image;
