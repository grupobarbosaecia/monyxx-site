import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Shield from "../../assets/icons/shield.svg";
import Candles from "../../assets/icons/candles.svg";
import Finance from "../../assets/icons/finance.svg";
import Deposit from "../../assets/icons/deposit.svg";
import { useTranslation } from "react-i18next";

const Benefits: React.FC = () => {
    const { t } = useTranslation("main")
    return <Box w={"100%"}>
        <Text
            color={"#FFFF"}
            fontFamily= 'Poppins'
            fontWeight={800}
            fontSize={["20px","20px","2.55vw","2.55vw"]}
            lineHeight={"3.80vw"}
            textAlign="center"
        >{t("cards.title")}</Text>
        <Flex flexDirection={["column","column","row","row","row"]} alignItems="center" justifyContent={"center"} mt="80px">
            <Box
                w={[293,334,334,334,334]}
                h={[412.470,470,470,470,470]}
                borderRadius={30}
                bg={"linear-gradient(180deg, rgba(61, 220, 252, 0.4) 0%, rgba(22, 27, 108, 0.4) 100%)"}
                marginRight={["0px","0px","4.80vh","4.80vh","4.80vh"]}
                mb={["30px","30px","0","0","0"]}
                padding="30px"
                alignItems="center" justifyContent={"center"} textAlign="center" alignContent={"center"}
            >
                <Image h={"120px"} w={"120px"} src={Shield} marginLeft="auto" marginRight="auto"></Image>
                <Text
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={800}
                    fontSize={["26px","26px","1.5625vw","1.5625vw","1.5625vw"]}
                    lineHeight={["73px","73px","3.80vw","3.80vw","3.80vw"]}
                    textAlign="center"
                    mt={"15px"}
                >
                    {t("cards.security.title")}
                </Text>
                <Text
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={600}
                    fontSize={["14px","14px","0.89vw","0.89vw","0.89vw"]}
                    lineHeight={["23px","23px","1.40vw","1.40vw","1.40vw"]}
                    textAlign="center"
                    mt={"25px"}
                >
                    {t("cards.security.content")}
                </Text>
            </Box>
            <Box
                w={[293,334,334,334,334]}
                h={[412.3,470,470,470,470]}
                borderRadius={30}
                bg={"linear-gradient(180deg, rgba(61, 220, 252, 0.4) 0%, rgba(22, 27, 108, 0.4) 100%)"}
                marginRight={["0px","0px","4.80vh","4.80vh","4.80vh"]}
                mb={["30px","30px","0","0","0"]}
                padding="30px"
                alignItems="center" justifyContent={"center"} textAlign="center" alignContent={"center"}
            >
                <Image h={"120px"} w={"120px"} src={Finance} marginLeft="auto" marginRight="auto"></Image>
                <Text
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={800}
                    fontSize={["26px","26px","1.5625vw","1.5625vw","1.5625vw"]}
                    lineHeight={["73px","73px","3.80vw","3.80vw","3.80vw"]}
                    textAlign="center"
                    mt={"15px"}
                >
                    {t("cards.demo.title")}
                </Text>
                <Text
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={600}
                    fontSize={["14px","14px","0.89vw","0.89vw","0.89vw"]}
                    lineHeight={["23px","23px","1.40vw","1.40vw","1.40vw"]}
                    textAlign="center"
                    mt={"25px"}
                >
                    {t("cards.demo.content")}
                </Text>
            </Box>
            <Box
                w={[293,334,334,334,334]}
                h={[412.3,470,470,470,470]}
                borderRadius={30}
                bg={"linear-gradient(180deg, rgba(61, 220, 252, 0.4) 0%, rgba(22, 27, 108, 0.4) 100%)"}
                marginRight={["0px","0px","4.80vh","4.80vh","4.80vh"]}
                mb={["30px","30px","0","0","0"]}
                padding="30px"
                alignItems="center" justifyContent={"center"} textAlign="center" alignContent={"center"}
            >
                <Image h={"120px"} w={"120px"} src={Deposit} marginLeft="auto" marginRight="auto"></Image>
                <Text
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={800}
                    fontSize={["26px","26px","1.5625vw","1.5625vw","1.5625vw"]}
                    textAlign="center"
                    mt={"20px"}
                >
                    {t("cards.depositsWithdraws.title")}
                </Text>
                <Text
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={600}
                    fontSize={["14px","14px","0.89vw","0.89vw","0.89vw"]}
                    lineHeight={["23px","23px","1.40vw","1.40vw","1.40vw"]}
                    textAlign="center"
                    mt={"25px"}
                >
                    {t("cards.depositsWithdraws.content")}
                </Text>
            </Box>
            <Box
                w={[293,334,334,334,334]}
                h={[412.3,470,470,470,470]}
                borderRadius={30}
                bg={"linear-gradient(180deg, rgba(61, 220, 252, 0.4) 0%, rgba(22, 27, 108, 0.4) 100%)"}
                marginRight={["0px","0px","4.80vh","4.80vh","4.80vh"]}
                padding="30px"
                alignItems="center" justifyContent={"center"} textAlign="center" alignContent={"center"}
            >
                <Image h={"120px"} w={"120px"} src={Candles} marginLeft="auto" marginRight="auto"></Image>
                <Text
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={800}
                    fontSize={["26px","26px","1.5625vw","1.5625vw","1.5625vw"]}
                    textAlign="center"
                    mt={"20px"}
                >
                    {t("cards.tradingSpeed.title")}
                </Text>
                <Text
                    color={"#FFFF"}
                    fontFamily= 'Poppins'
                    fontWeight={600}
                    fontSize={["14px","14px","0.89vw","0.89vw","0.89vw"]}
                    lineHeight={["23px","23px","1.40vw","1.40vw","1.40vw"]}
                    textAlign="center"
                    mt={"25px"}
                >
                    {t("cards.tradingSpeed.content")}
                </Text>
            </Box>
            

        </Flex>
    </Box>
}

export default Benefits;