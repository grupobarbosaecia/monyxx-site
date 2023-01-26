import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ChooseLanguage } from "../../components/ChooseLanguage";

const Terms: React.FC = () => {
    const { t } = useTranslation("terms")
    const navigate = useNavigate();
    return (
      <Box bg={"#0C0F44"}>
        <Box marginX={["0%","0%","15%","20%","25%"]} paddingX={"5%"} bg={"#fafafa"} paddingY={"50px"}>
          <Box
              _hover={{
                color: "blue.500",
              }}
              cursor="pointer"
              color={"#323232"}
              width={30}
              float={["left", "left", "none", "none", "left"]}
              >
                <Icon as={IoIosArrowRoundBack} fontSize={50} onClick={() => navigate("/")} />
          </Box>
          <Box float={"right"}>
            <ChooseLanguage textColor={"#323232"} />
          </Box>
          <Box mt={"60px"} color="#323232">
            <Text fontWeight={"bold"} textAlign={"center"}>{t("title")}<br /><br /></Text>
            <Text>
            {t("paragraph1")}<br /><br />
            {t("paragraph2")}<br /><br />
            {t("paragraph3")}<br /><br />
            {t("paragraph4")}<br /><br />
            {t("paragraph5")}<br /><br />
            {t("paragraph6")}<br /><br />
            {t("paragraph7")}<br /><br />
            {t("paragraph8")}<br /><br />
            {t("paragraph9")}<br /><br />
            {t("paragraph10")}<br /><br />
            </Text>
          </Box>
        </Box>
      </Box>
      );
}

export default Terms;