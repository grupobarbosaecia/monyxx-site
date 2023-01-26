import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer: React.FC = () => {
    const { t } = useTranslation("footer")
    return <Box>
        <Flex paddingX={["20px","50px","70px","70px","70px"]} paddingY="15px"  flexDirection={"row"} borderTop={"1px solid #FFFF"} borderBottom={"1px solid #FFFF"}>
            <Box>
                <Text                     
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={400}
                    fontSize={["8px","10px","16px","16px","16px"]}
                    lineHeight={["15px","20px","27px","27px","27px"]}
                    textAlign="center"
                    mr={["12px","25px","45px","45px","45px"]}
                >{t("allRights")}</Text>
            </Box>
            <Link to="/terms" target={"_blank"} style={{ textDecoration: "none" }}>
                    <Text
                        color={"#FFFF"}
                        fontFamily= 'Poppins'
                        fontWeight={600}
                        fontSize={["10px","14px","17px","17px","17px"]}
                        lineHeight={["15px","20px","27px","27px","27px"]}
                        textAlign="center"
                        mr={["12px","25px","45px","45px","45px"]}
                        _hover={{color: "#3DDCFC"}}
                    >{t("TermsOfUse")}</Text>
            </Link>
            <Link to="/policy" target={"_blank"} style={{ textDecoration: "none" }}>
                <Text
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={600}
                    fontSize={["10px","14px","17px","17px","17px"]}
                    lineHeight={["15px","20px","27px","27px","27px"]}
                    textAlign="center"
                    _hover={{color: "#3DDCFC"}}
                    mr={["12px","25px","28px","45px","45px"]}
                >{t("PrivacyPolicy")}</Text>
            </Link>
            <Text
            color={"#FFFF"}
            fontFamily= 'Poppins'
            fontWeight={600}
            fontSize={["10px","14px","17px","17px","17px"]}
            _hover={{color: "#3DDCFC"}}
            onClick={()=>{window.location.href = "https://api.whatsapp.com/send?phone=441412802750&text=Quero%20ser%20afiliado"}}
            cursor="pointer"
            lineHeight={["15px","20px","27px","27px","27px"]}>{t("affiliate")} <Icon marginBottom={-0.5} as={AiOutlineArrowRight} fontSize={["10px","14px","17px","17px","17px"]} /></Text>
            <Box ml="auto">
                <Text
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={700}
                    fontSize={["10px","14px","17px","17px","17px"]}
                    lineHeight={["15px","20px","27px","27px","27px"]}
                    textAlign="center"
                >Monyxx 2022</Text>
            </Box>
        </Flex>
    </Box>
}

export default Footer;
