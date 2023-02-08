import { Box, Icon } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { ChooseLanguage } from "../../components/ChooseLanguage"
import PaymentPolicy from "./PaymentPolicy/PaymenyPolicy"
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy"

const Policy: React.FC = () => {
	const navigate = useNavigate()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<Box bg={"#0C0F44"}>
			<Box
				marginX={["0%", "0%", "15%", "20%", "25%"]}
				paddingX={"5%"}
				bg={"#fafafa"}
				paddingY={"50px"}
			>
				<Box
					_hover={{
						color: "blue.500",
					}}
					cursor="pointer"
					color={"#323232"}
					width={30}
					float={["left", "left", "none", "none", "left"]}
				>
					<Icon
						as={IoIosArrowRoundBack}
						fontSize={50}
						onClick={() => navigate("/")}
					/>
				</Box>
				<Box float={"right"}>
					<ChooseLanguage textColor={"#323232"} />
				</Box>
				<PaymentPolicy />
				<PrivacyPolicy />
			</Box>
		</Box>
	)
}

export default Policy
