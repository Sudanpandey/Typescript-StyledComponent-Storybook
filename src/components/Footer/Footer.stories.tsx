import React from "react";
import { storiesOf } from "@storybook/react";

import Footer from ".";
import {
	faFacebookSquare,
	faInstagramSquare,
	faTwitterSquare,
	faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
	Title,
	Body,
	ListItem,
	TextArea,
	Input,
	Button,
	Icon,
} from "src/components";
import { styled } from "src/theme";

const SectionFirst: React.FC = () => {
	const IconWrapper = styled.div`
		.iconStyle {
			margin-right: 5px;
		}
	`;
	return (
		<>
			<Title type="primary" content="Awa" />
			<Body
				content="AwaInspires is a functional Blog concelved for the purpose of a tutorials on
		  YouTube.However,Awa has a blog called pieceofadvice.org where he writes truly inspiring stuff."
			/>
			<IconWrapper>
				<Icon
					icon={faFacebookSquare}
					color="green"
					className="iconStyle"
				/>
				<Icon
					icon={faInstagramSquare}
					color="green"
					className="iconStyle"
				/>
				<Icon
					icon={faTwitterSquare}
					color="green"
					className="iconStyle"
				/>
				<Icon
					icon={faYoutubeSquare}
					color="green"
					className="iconStyle"
				/>
			</IconWrapper>
		</>
	);
};

const SectionSecond: React.FC = () => {
	return (
		<>
			<Title type="secondary" content="QUICK LINKS" />
			<ListItem
				items={[
					"Events",
					"Contact",
					"Mentors",
					"Galleries",
					"Write for us",
					"Terms and Conditions",
				]}
			/>
		</>
	);
};

const SectionThirdWrapper = styled.div`
	.inputMargin {
		margin-bottom: 5px;

		width: 98.5%;
	}

	.textAreaStyle {
		width: 98%;
	}
`;

const SectionThird: React.FC = () => {
	const [inputValue, setInputValue] = React.useState("");
	const [textAreaValue, setTextAreaValue] = React.useState("");

	const ButtonWrapper = styled.div`
		display: flex;
		justify-content: flex-end;

		.buttonMargin {
			margin-top: 5px;
		}
	`;
	return (
		<SectionThirdWrapper>
			<Title type="tertiary" content="Contact Us" />
			<Input
				name="name"
				type="text"
				value={inputValue}
				inputLabel="Email"
				placeHolder="Your email address"
				className="inputMargin"
				handleChange={({ target: { value } }) => setInputValue(value)}
				handleBlur={(event) => {
					console.log(event);
				}}
			/>
			<TextArea
				type="text"
				name="name"
				inputLabel="Message"
				value={textAreaValue}
				placeHolder="Message..."
				className="textAreaStyle"
				handleChange={({ target: { value } }) =>
					setTextAreaValue(value)
				}
				handleBlur={(event) => {
					console.log(event);
				}}
			/>
			<ButtonWrapper>
				<Button
					buttonText="Send"
					className="buttonMargin"
					type="tertiary"	
					onClick={() => {}}
				/>
			</ButtonWrapper>
		</SectionThirdWrapper>
	);
};        	

storiesOf("Footer", module).add("default", () => {
	return (
		<Footer
			sectionFirst={<SectionFirst />}
			sectionSecond={<SectionSecond />}
			sectionThird={<SectionThird />}
		/>
	);
});
