import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../GlobalStyles";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
} from "./StoreMaps.elements";
import Maps from "./Maps/Maps";
const StoreMaps = ({
	lightBg,
	imgStart,
	lightTopLine,
	topLine,
	lightText,
	headline,
	lightTextDesc,
	address,
	phone,
	email,
	primary,
	urlLinkBtn,
	buttonLabel,
}) => {
	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>
									Địa chỉ: {address}
								</Subtitle>
								<Subtitle lightTextDesc={lightTextDesc}>
									Số điện thoại: {phone}
								</Subtitle>
								<Subtitle
									lightTextDesc={lightTextDesc}
									style={{ marginBottom: "35px" }}
								>
									Email: {email}
								</Subtitle>
								<Link to={urlLinkBtn}>
									<Button big fontBig primary={primary}>
										{buttonLabel}
									</Button>
								</Link>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<Maps />
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default StoreMaps;