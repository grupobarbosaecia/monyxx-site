import { Box, Text } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"

const PrivacyPolicy: React.FC = () => {
	const { t } = useTranslation("privacy_policy")
	return (
		<Box mt={"60px"} color="#323232">
			<Text fontWeight={"bold"} textAlign={"center"}>
				{t("title")}
				<br />
				<br />
			</Text>
			<Text textAlign={"justify"}>
				<Text fontWeight={"bold"} textAlign={"justify"}>
					{t("group1.title")}
					<br />
					<br />
				</Text>
				{t("group1.paragraph1")}
				<br />
				<br />
				{t("group1.paragraph2")}
				<br />
				<br />
				{t("group1.paragraph3")}
				<br />
				<br />
				{t("group1.paragraph4")}
				<br />
				<br />
				<Text fontWeight={"bold"}>
					{t("group2.title")}
					<br />
					<br />
				</Text>
				{t("group2.paragraph1")}
				<br />
				<br />
				{t("group2.paragraph2")}
				<br />
				<br />
				{t("group2.paragraph3")}
				<br />
				<br />
				{t("group2.paragraph4")}
				<br />
				<br />
				{t("group2.paragraph5")}
				<br />
				<br />
				{t("group2.paragraph6")}
				<br />
				<br />
				{t("group2.paragraph7")}
				<br />
				<br />
				<Text fontWeight={"bold"}>
					{t("group3.title")}
					<br />
					<br />
				</Text>
				{t("group3.paragraph1")}
				<br />
				<br />
				{t("group3.paragraph2")}
				<br />
				<br />
				{t("group3.paragraph3")}
				<br />
				<br />
				{t("group3.paragraph4")}
				<br />
				<br />
				{t("group3.paragraph5")}
				<br />
				<br />
				{t("group3.paragraph6")}
				<br />
				<br />
				{t("group3.paragraph7")}
				<br />
				<br />
				{t("group3.paragraph8")}
				<br />
				<br />
				{t("group3.paragraph9")}
				<br />
				<br />
				{t("group3.paragraph10")}
				<br />
				<br />
			</Text>
		</Box>
	)
}

export default PrivacyPolicy
