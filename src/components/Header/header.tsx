import { Box, Button, Flex, HStack, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { ChooseLanguage } from "../ChooseLanguage";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";


const Header: React.FC = () => {
    const { t } = useTranslation("header")
    return <Flex
        //px={8 / 4}
        //py={6 / 4}
        //gap="9px"
        maxHeight={"150px"}
        h={"12vw"}
        maxW={"100vw"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mx={["0", "0", "0", "1vw", "1vw"]}
        mb={["0", "0", "0", "50px", "50px"]}
    >
        <HStack justifyContent="left" alignItems={"center"} gap="1vw">
                <Box onClick={()=>{window.location.href="https://app.monyxx.com/"}}>
                    <Image src={Logo} zIndex={100} maxW={"238px"} width={["120px","150px","180px","220px","238px"]} position="absolute" top={["4vw", "4vw", "4vw", "4vw", "45px"]} left={["40px","60px","95px","105px","105px"]}/>
                </Box>
        </HStack>
        <HStack justifyContent="right" alignItems={"center"}>
                <Box display={["none", "none", "flex", "flex", "flex"]}>
                    <ChooseLanguage textColor={"#FFFF"} />
                </Box>
                <Box display={["none", "none", "flex", "flex", "flex"]}>
                    <Button
                        background={"#3DDCFC"}
                        color={"white"}
                        onClick={()=>{window.location.href = "https://app.monyxx.com/sign"}}
                        fontFamily= 'Poppins'
                        fontWeight={"500"}
                        overflow="hidden"
                        fontSize={"70%"}
                        h={["28px", "28px", "33px", "33px", "33px"]}
                        paddingX={["6vw", "6vw", "40px", "60px", "60px"]}
                        boxShadow={"0px 5px 15px rgba(61, 220, 252, 0.25)"}
                        borderRadius={"8px"}
                        transition={"border-radius 0.5s"}
                        _hover={{
                            borderRadius: "2px",
                        }}
                        textTransform={"uppercase"}
                    >
                        {t("register")}
                    </Button>
                </Box>
                <Box display={["none", "none", "flex", "flex", "flex"]}>
                    <Button
                        background={"linear-gradient(136.67deg, #5DE383 8.34%, #50C271 95.26%)"}
                        color={"white"}
                        onClick={()=>{window.location.href = "https://app.monyxx.com/sign"}}
                        fontWeight={"500"}
                        fontFamily= 'Poppins'
                        overflow="hidden"
                        fontSize={"70%"}
                        h={["28px", "28px", "33px", "33px", "33px"]}
                        paddingX={["6vw", "6vw", "40px", "60px", "60px"]}
                        boxShadow={"0px 4px 31px rgba(92, 255, 156, 0.4)"}
                        borderRadius={"8px"}
                        transition={"border-radius 0.5s"}
                        _hover={{
                            borderRadius: "2px",
                        }}
                        textTransform={"uppercase"}
                    >
                        {t("login")}
                    </Button>
                </Box>
            </HStack>
                    <Menu
                        isLazy
                    >
                        <MenuButton
                            as={HamburgerIcon}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="outline"
                            //marginLeft={"16px"}
                            w={30}
                            h={50}
                            mt={"15px"}
                            color= "gray.400"
                            display={["flex","flex","none","none","none"]}
                            position={"absolute"}
                            left={["85%","90%","0%","0%","0%"]}
                        />
                        <MenuList backgroundColor="#0C0F33">
                            <MenuItem
                                aria-orientation="vertical"
                                backgroundColor="#3DDCFC"
                                color= "#FFFF"
                                key={"/sign"}
                                flex={1}
                                //px={4 / 4}
                                borderRadius={10}
                                mx="auto"
                                width={200}
                                onClick={() => {window.location.href = "https://app.monyxx.com/sign"}}
                                sx={{
                                    borderBottomColor: "gray.50",
                                    _selected: {
                                        borderBottomColor: "green.500",
                                    },
                                    _focus: {
                                        outline: "none",
                                    },
                                }}
                                fontSize={"md"}
                            >
                                {t("login")}
                            </MenuItem>
                            <MenuItem
                                aria-orientation="vertical"
                                bg="linear-gradient(136.67deg, #5DE383 8.34%, #50C271 95.26%)"
                                color= "#FFFF"
                                key={"/register"}
                                flex={1}
                                //px={4 / 4}
                                borderRadius={10}
                                mt={2}
                                mx="auto"
                                width={200}
                                onClick={() => {window.location.href = "https://app.monyxx.com/sign"}}
                                sx={{
                                    borderBottomColor: "gray.50",
                                    _selected: {
                                        borderBottomColor: "green.500",
                                    },
                                    _focus: {
                                        outline: "none",
                                    },
                                }}
                                fontSize={"md"}
                            >
                                {t("register")}
                            </MenuItem>
                            <Box ml="50%">
                                <ChooseLanguage textColor={"#FFFF"} />
                            </Box>
                        </MenuList>
                    </Menu>
    </Flex>
}

export default Header;