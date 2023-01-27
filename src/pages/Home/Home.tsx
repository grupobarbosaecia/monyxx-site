import React from "react"
import {
	Flex,
	Image,
	Heading,
	Text,
	Stack,
	Icon,
	Box,
	useBreakpointValue,
} from "@chakra-ui/react"
import Header from "../../components/Header/header"
import notebook from "../../assets/main-notebook.png"
import ButtonDemo from "../../components/ButtonDemo/ButtonDemo"
import { useTranslation } from "react-i18next"
import { largeArrowIcon } from "../../assets/icons"
import clipBg from "../../assets/icons/clipBg.svg"
import clipBgDesktop from "../../assets/icons/clipBgDesktop.svg"
import Carousel from "../../components/Carousel/Carousel"

const Home: React.FC = () => {
	const { t } = useTranslation("main")
	// const isTablet = useBreakpointValue({
	// 	base: true,
	// 	md: false,
	// })

	return (
		<Stack
			bg={"monyxxColors.100"}
			minH={"100vh"}
			w={"100%"}
			// px={["10", "16", "20", "36", "60"]}
			py={"7"}
			gap={"20"}
		>
			<Header />
			<Flex
				px={["10", "16", "20", "36", "60"]}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDirection={{
					base: "column-reverse",
					sm: "column-reverse",
					md: "row",
				}}
				gap={{
					base: "7",
					sm: "7",
					md: "0",
					lg: "4",
				}}
			>
				<Stack
					maxW={{
						base: "none",
						sm: "none",
						lg: "450px",
					}}
					gap={2}
					minW={{
						base: "none",
						sm: "340px",
					}}
				>
					<Heading
						fontSize={{
							base: 22,
							sm: 26,
						}}
					>
						{t("firstSection.heading")}
					</Heading>
					<Text fontSize={16}>{t("firstSection.subtitle")}</Text>
					<ButtonDemo>{t("cta")}</ButtonDemo>
				</Stack>
				<Image
					src={notebook}
					width={{
						base: "80vw",
						sm: "70vw",
						md: "45vw",
						lg: "45vw",
					}}
					maxW={{
						base: "none",
						sm: "none",
						lg: "700px",
					}}
					alignSelf={{
						base: "center",
						md: "auto",
					}}
					// pl={{
					// 	base: "50px",
					// 	md: "0",
					// }}
				/>
			</Flex>

			<Flex
				px={["10", "16", "20", "36", "60"]}
				w={"100%"}
				justifyContent={"space-between"}
				alignItems={"center"}
				gap={6}
				flexDirection={{
					base: "column",
					md: "row",
				}}
			>
				<Heading
					textAlign={{
						base: "center",
						md: "start",
					}}
					fontSize={{
						base: 25,
						md: 20,
						lg: 26,
					}}
					maxW={"300px"}
				>
					{t("secondSection.heading")}
				</Heading>
				<Icon
					as={largeArrowIcon}
					boxSize={12}
					transform={{
						base: "rotate(90deg)",
						md: "rotate(0)",
					}}
				/>
				<Flex
					gap={6}
					flexDirection={{
						base: "column",
						md: "row",
					}}
				>
					<Flex
						bg={"monyxxColors.degrade.black"}
						flexDir={"column"}
						alignItems={"center"}
						justifyContent={"center"}
						w={{
							base: "230px",
							md: "200px",
							"2xl": "250px",
						}}
						h={{
							base: "77px",
							md: "70px",
							"2xl": "80px",
						}}
						borderRadius={{
							base: "12px",
							md: "10px",
						}}
						boxShadow={"-43px 54px 90px rgba(23, 18, 43, 0.55)"}
						backdropFilter={"blur(12.5px)"}
					>
						<Text
							fontSize={{
								base: "16px",
								md: "15px",
								"2xl": "18px",
							}}
						>
							1.235.889
						</Text>
						<Text fontSize={14}>
							{t("secondSection.firstCard")}
						</Text>
					</Flex>

					<Flex
						bg={"monyxxColors.degrade.black"}
						flexDir={"column"}
						alignItems={"center"}
						justifyContent={"center"}
						w={{
							base: "230px",
							md: "200px",
							"2xl": "250px",
						}}
						h={{
							base: "77px",
							md: "70px",
							"2xl": "80px",
						}}
						borderRadius={{
							base: "12px",
							md: "10px",
						}}
						boxShadow={"-43px 54px 90px rgba(23, 18, 43, 0.55)"}
						backdropFilter={"blur(12.5px)"}
					>
						<Text
							fontSize={{
								base: "16px",
								md: "15px",
								"2xl": "18px",
							}}
						>
							19.235.889
						</Text>
						<Text fontSize={14}>
							{t("secondSection.secondCard")}
						</Text>
					</Flex>
				</Flex>
			</Flex>

			<Flex
				mt={"-150px !important"}
				alignItems={"center"}
				justifyContent={"center"}
				width={"100vw"}
				h={"400px"}
				bg={{
					base: "url(" + clipBg + ")",
					sm: "url(" + clipBgDesktop + ")",
				}}
				style={{
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
				minH={{
					base: "1200px",
					sm: "1430px",
				}}
			>
				<Carousel></Carousel>
			</Flex>
		</Stack>
	)
}

export default Home
