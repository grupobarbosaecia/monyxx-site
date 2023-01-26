import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

const PaymentPolicy: React.FC = () => { 
    const { t } = useTranslation("payment_policy")
    return (
        <Box mt={"60px"} color="#323232">
          <Text fontWeight={"bold"} textAlign={"center"}>{t("title")}<br /><br /></Text>
          <Text>
            <Text fontWeight={"bold"}>{t("group1.title")}<br /><br /></Text>
            {t("group1.paragraph1")}<br /><br />
            {t("group1.paragraph2")}<br /><br />
            {t("group1.paragraph3")}<br /><br />
            {t("group1.paragraph4")}<br /><br />
            {t("group1.paragraph5")}<br /><br />
            {t("group1.paragraph6")}<br /><br />
            {t("group1.paragraph7")}<br /><br />
            {t("group1.paragraph8")}<br /><br />
            {t("group1.paragraph9")}
            <br /><br />
            <Text fontWeight={"bold"}>{t("group2.title")}<br /><br /></Text>
            {t("group2.paragraph1")}<br /><br />
            {t("group2.paragraph2")}<br /><br />
            {t("group2.paragraph3")}<br /><br />
            {t("group2.paragraph4")}<br /><br />
            {t("group2.paragraph5")}<br /><br />
            {t("group2.paragraph6")}<br /><br />
            {t("group2.paragraph7")}<br /><br />
            {t("group2.paragraph8")}<br /><br />
            {t("group2.paragraph9")}<br /><br />
            {t("group2.paragraph10")}
            <br /><br />
            <Text fontWeight={"bold"}>{t("group3.title")}<br /><br /></Text>
            {t("group3.paragraph1")}<br /><br />
            {t("group3.paragraph2")}<br /><br />
            {t("group3.paragraph3")}<br /><br />
            {t("group3.paragraph4")}<br /><br />
            {t("group3.paragraph5")}<br /><br />
            {t("group3.paragraph6")}
            <br /><br />
            <Text fontWeight={"bold"}>{t("group4.title")}<br /><br /></Text>
            {t("group4.paragraph1")}<br /><br />
            {t("group4.paragraph2")}<br /><br />
            {t("group4.paragraph3")}<br /><br />
            {t("group4.paragraph4")}<br /><br />
            {t("group4.paragraph5")}<br /><br />
            {t("group4.paragraph6")}<br /><br />
            {t("group4.paragraph7")}<br /><br />
            {t("group4.paragraph8")}<br /><br />
            {t("group4.paragraph9")}<br /><br />
            {t("group4.paragraph10")}
            <br /><br />
            <Text fontWeight={"bold"}>{t("group5.title")}<br /><br /></Text>
            {t("group5.paragraph1")}<br /><br />
            {t("group5.paragraph2")}<br /><br />
            {t("group5.paragraph3")}<br /><br />
            {t("group5.paragraph4")}<br /><br />
            {t("group5.paragraph5")}
            <br /><br />
            <Text fontWeight={"bold"}>{t("group6.title")}<br /><br /></Text>
            {t("group6.paragraph1")}
            <br /><br />
            <Text fontWeight={"bold"}>{t("group7.title")}<br /><br /></Text>
            {t("group7.paragraph1")}<br /><br />
            {t("group7.paragraph2")}<br /><br />
            {t("group7.paragraph3")}<br /><br />
            {t("group7.paragraph4")}<br /><br />
            {t("group7.paragraph5")}<br /><br />
          </Text>
        </Box>
    )
}

export default PaymentPolicy;