import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Devices from "../../assets/devices.png";
import { useTranslation } from "react-i18next";

const Slogan: React.FC = () => {
    const { t } = useTranslation("main")
    return <Flex flexDirection={["column","row","row","row", "row"]} w={"100%"} ml="3vw">
        <Image w={["80vw", "40vw", "34vw", "34vw", "34vw"]} h={["18vh","30vh","30vh","30vh","30vh"]} src={Devices}></Image>
        <Text w={["80vw", "40vw", "42vw", "42vw", "42vw"]} h={["28vh","28vh","28vh","28vh","28vh"]} 
            color={"#FFFF"}
            fontFamily= 'Poppins'
            fontWeight={800}
            fontSize={["8vw","2.55vw","2.55vw","2.55vw","2.55vw"]}
            lineHeight={["42px","3.80vw","3.80vw","3.80vw","3.80vw"]}
            textAlign="center"
            ml={"2.1vw"}
            mt={["30px","0px","0px","0px","0px"]}
        >
            {t("content1")} <span style={{color: "#3DDCFC"}}>{t("content2")}</span> {t("content3")} <span style={{color: "#3DDCFC"}}>{t("content4")}</span> <Text>{t("subContent")}</Text>
        </Text>
    </Flex>
}

export default Slogan;