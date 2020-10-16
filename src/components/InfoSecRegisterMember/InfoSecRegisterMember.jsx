import React, { useState } from "react";
import { Container, Button } from "../../GlobalStyles";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	Form,
	FormInput,
	FormLabel,
	FormSelect,
	FormSelectOption,
} from "./InfoSecRegisterMember.elements";

const InfoSecRegisterMember = ({
	lightBg,
	imgStart,
	lightText,
	headline,
	lightTextDesc,
	description,
	buttonLabel,
	img,
	alt,
	start,
}) => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [name, setName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [dob, setDob] = useState("");
	const [sex, setSex] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		alert("Dang lam` doi. xiu' sap' xong rui`");
	};

	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
								<Form>
									<FormLabel htmlFor="">Số điện thoại:</FormLabel>
									<FormInput
										type="text"
										value={phoneNumber}
										onChange={({ target }) => setPhoneNumber(target.value)}
									/>
									<FormLabel htmlFor="">Họ và tên:</FormLabel>
									<FormInput
										type="text"
										value={name}
										onChange={({ target }) => setName(target.value)}
									/>
									<FormLabel htmlFor="">Ngày sinh:</FormLabel>
									<FormInput
										type="date"
										value={dob}
										onChange={({ target }) => setDob(target.value)}
									/>
									<FormLabel htmlFor="">Giới tính:</FormLabel>
									<FormSelect
										value={sex}
										onChange={({ target }) => setSex(target.value)}
									>
										<FormSelectOption>Chọn giới tính</FormSelectOption>
										<FormSelectOption>Nam</FormSelectOption>
										<FormSelectOption>Nữ</FormSelectOption>
										<FormSelectOption>Khác</FormSelectOption>
									</FormSelect>
									<FormLabel htmlFor="">Email:</FormLabel>
									<FormInput
										type="email"
										value={emailAddress}
										onChange={({ target }) => setEmailAddress(target.value)}
									/>
									<Button type="submit" onClick={handleFormSubmit}>
										{buttonLabel}
									</Button>
								</Form>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSecRegisterMember;