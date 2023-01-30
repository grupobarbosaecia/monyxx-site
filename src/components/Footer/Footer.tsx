import { Grid, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import SocialMedia from "./SocialMedia/SocialMedia";
import Facebook from "../../assets/icons/Facebook.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Youtube from "../../assets/icons/Youtube.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import telegram from "../../assets/icons/telegram.svg";
import instagram from "../../assets/icons/instagram.svg";
import logo from "../../assets/logo.png";

const Footer: React.FC = () => {
    const { t } = useTranslation("footer");
    return (
        
        <Flex
            zIndex={4}
            px={["5", "16", "20", "36", "60"]}
            py={28}
            bg={" linear-gradient(210.96deg, #161816 0.01%, rgba(48, 47, 65, 0.89) 42.05%, #4D4C64 104.81%)"}
            backdropFilter={" blur(12.5px)"}
            flexDir={"column"}
            gap={4}
            borderRadius={"15px 15px 0px 0px "}
        >
            <Heading
                fontSize={{
                    base: 20,
                }}
            >
                {t("header")}
            </Heading>
            <Text
                fontSize={{
                    base: 14,
                }}
                textAlign={"justify"}
            >
                {t("paragraph1")}
            </Text>
            <Text
                fontSize={{
                    base: 14,
                }}
                textAlign={"justify"}
            >
                {t("paragraph2")}
            </Text>

            <Grid
                templateColumns={{
                    base: "1fr",
                    lg: "1fr 1fr 3fr",
                }}
                templateRows={{
                    base: "repeat(4, 1fr)",
                    lg: "1fr 1fr",
                }}
                placeItems={{
                    base: "center",
                    lg: "normal",
                }}
                gap={2}
            >
                <Flex
                    flexDir={"row"}
                    gap={2}
                    gridColumn={{
                        base: "1",
                        lg: "3",
                    }}
                    gridRow={{
                        base: "2",
                        lg: "1",
                    }}
                    justifySelf={{
                        base: "center",
                        lg: "flex-end",
                    }}
                >
                    <SocialMedia icon={Facebook} />
                    <SocialMedia icon={instagram} />
                    <SocialMedia icon={Twitter} />
                    <SocialMedia icon={Youtube} />
                    <SocialMedia icon={telegram} />
                    <SocialMedia icon={tiktok} />
                </Flex>

                <Text
                    gridRow={{
                        base: "1",
                        lg: "2",
                    }}
                    gridColumn={{
                        base: "1",
                        lg: "2",
                    }}
                    fontSize={{
                        base: 14,
                    }}
                    justifySelf={"center"}
                    alignSelf={"center"}
                >
                    {t("affiliate")}
                </Text>
                <Text
                    gridRow={{
                        base: "3",
                        lg: "2",
                    }}
                    justifySelf={{
                        base: "center",
                        lg: "flex-end",
                    }}
                    alignSelf={"center"}
                    gridColumn={{
                        base: "1",
                        lg: "3",
                    }}
                    fontSize={{
                        base: 14,
                    }}
                    textAlign={"center"}
                >
                    {t("copyright")}
                </Text>

                <Image
                    gridColumn={"1"}
                    gridRow={{
                        base: "4",
                        lg: "2",
                    }}
                    src={logo}
                    w={"150px"}
                />
            </Grid>
        </Flex>
    );
};

export default Footer;
