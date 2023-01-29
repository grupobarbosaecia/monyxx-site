import {
	Box,
	Button,
	Flex,
	HStack,
	Image,
	Link,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	useBreakpointValue,
	useDisclosure,
	ButtonGroup,
	Icon,
} from "@chakra-ui/react"
import React, { useRef } from "react"
import minLogo from "../../assets/logo-mob.png"
import logo from "../../assets/logo.png"
import { exitIcon } from "../../assets/icons"
import { ChooseLanguage } from "../ChooseLanguage"
import { HamburgerIcon } from "@chakra-ui/icons"
import { useTranslation } from "react-i18next"

const Header: React.FC = () => {
	const { t } = useTranslation("header")
	const { isOpen, onOpen, onClose } = useDisclosure()
	const algumref = useRef(null)
	const isDesktop = useBreakpointValue({
		base: false,
		lg: true,
	})
	const isTablet = useBreakpointValue({
		base: false,
		md: true,
	})

	return (
		<Flex
			px={["10", "16", "20", "36", "60"]}
			h={"50px"}
			alignItems={"center"}
			justifyContent={"space-between"}
			flexDirection={{
				sm: "row-reverse",
				base: "row-reverse",
				md: "row-reverse",
				lg: "row",
				xl: "row",
			}}
		>
			<Box>
				<Image
					src={isDesktop ? minLogo : logo}
					h={{
						base: "30px",
						sm: "45px",
						md: "45px",
						lg: "45px",
						xl: "45px",
						"2xl": "45px",
					}}
					pointerEvents={"none"}
					userSelect={"none"}
				/>
			</Box>
			{isDesktop && (
				<HStack gap={"2"}>
					<Link
						textDecoration={"none"}
						fontWeight={"medium"}
						color={"white.0"}
						_hover={{
							color: "white.200",
						}}
					>
						{t("links.1")}
					</Link>
					<Link
						textDecoration={"none"}
						fontWeight={"medium"}
						color={"white.0"}
						_hover={{
							color: "white.200",
						}}
					>
						{t("links.2")}
					</Link>
					<Link
						textDecoration={"none"}
						fontWeight={"medium"}
						color={"white.0"}
						_hover={{
							color: "white.200",
						}}
					>
						{t("links.3")}
					</Link>
					<Link
						textDecoration={"none"}
						fontWeight={"medium"}
						color={"white.0"}
						_hover={{
							color: "white.200",
						}}
					>
						{t("links.4")}
					</Link>
				</HStack>
			)}

			<ButtonGroup alignItems={"center"}>
				{isDesktop ? (
					<Box>
						<ChooseLanguage textColor={"#FFFF"} />
					</Box>
				) : (
					<>
						<Button
							p={"0"}
							pr={"5"}
							h={"30px"}
							bg={"transparent"}
							_hover={{}}
							_active={{}}
							onClick={onOpen}
						>
							<HamburgerIcon
								boxSize={{
									base: "30px",
									sm: "35px",
									md: "35px",
									lg: "35px",
									xl: "35px",
									"2xl": "35px",
								}}
								_active={{ opacity: 0.7 }}
							/>
						</Button>
						<Drawer
							isOpen={isOpen}
							placement="left"
							onClose={onClose}
							finalFocusRef={algumref}
							size={{
								base: "full",
								sm: "xs",
								md: "xs",
								lg: "xs",
								xl: "xs",
								"2xl": "xs",
							}}
						>
							<DrawerOverlay />
							<DrawerContent bg={"monyxxColors.degrade.black"}>
								<DrawerHeader
									display={"flex"}
									justifyContent={"space-between"}
									alignItems={"center"}
									flexDirection={"row-reverse"}
									py={"7"}
								>
									<Image
										src={logo}
										h={"30px"}
										pointerEvents={"none"}
										userSelect={"none"}
									/>

									<Icon
										as={exitIcon}
										boxSize={7}
										onClick={onClose}
									/>
								</DrawerHeader>

								<DrawerBody>
									<Flex
										gap={"2"}
										flexDirection={"column"}
										alignItems={"flex-start"}
									>
										<Link
											w={"100%"}
											borderRadius={5}
											p={"2"}
											textDecoration={"none"}
											fontWeight={"medium"}
											color={"white.200"}
											_hover={{
												background:
													"monyxxColors.degrade.black-hover",
											}}
										>
											{t("links.1")}
										</Link>
										<Link
											w={"100%"}
											borderRadius={5}
											p={"2"}
											textDecoration={"none"}
											fontWeight={"medium"}
											color={"white.200"}
											_hover={{
												background:
													"monyxxColors.degrade.black-hover",
											}}
										>
											{t("links.2")}
										</Link>
										<Link
											w={"100%"}
											borderRadius={5}
											p={"2"}
											textDecoration={"none"}
											fontWeight={"medium"}
											color={"white.200"}
											_hover={{
												background:
													"monyxxColors.degrade.black-hover",
											}}
										>
											{t("links.3")}
										</Link>
										<Link
											w={"100%"}
											borderRadius={5}
											p={"2"}
											textDecoration={"none"}
											fontWeight={"medium"}
											color={"white.200"}
											_hover={{
												background:
													"monyxxColors.degrade.black-hover",
											}}
										>
											{t("links.4")}
										</Link>
										<Box>
											<ChooseLanguage
												textColor={"#FFFF"}
											/>
										</Box>
									</Flex>
								</DrawerBody>

								<DrawerFooter py={"7"}>
									<Flex
										w={"100%"}
										flexDirection={{
											sm: "row",
											base: "column",
										}}
										gap={"2.5"}
									>
										<Button
											w={"100%"}
											h={"35px"}
											fontWeight={"medium"}
											color={"monyxxColors.white.300"}
											bg={"monyxxColors.degrade.blue"}
											_hover={{}}
											_active={{
												background:
													"linear-gradient(180deg, #1B28B0 0%, #4073F6 100%);",
											}}
											fontSize={"14px"}
										>
											{t("login")}
										</Button>
										<Button
											color={"monyxxColors.white.300"}
											bg={"monyxxColors.degrade.green"}
											_hover={{}}
											w={"100%"}
											h={"35px"}
											fontWeight={"medium"}
											fontSize={"14px"}
											_active={{
												background:
													"linear-gradient(180deg, #04AA45 0%, #4DFB91 100%); ",
											}}
										>
											{t("register")}
										</Button>
									</Flex>
								</DrawerFooter>
							</DrawerContent>
						</Drawer>
					</>
				)}

				{isTablet && (
					<>
						<Button
							w={"120px"}
							h={"35px"}
							fontWeight={"medium"}
							color={"monyxxColors.white.300"}
							bg={"monyxxColors.degrade.blue"}
							_hover={{}}
							_active={{
								background:
									"linear-gradient(180deg, #1B28B0 0%, #4073F6 100%);",
								boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)"
							}}
							fontSize={"14px"}
							boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25);"}
						>
							{t("login")}
						</Button>
						<Button
							color={"monyxxColors.white.300"}
							bg={"monyxxColors.degrade.green"}
							_hover={{}}
							w={"120px"}
							h={"35px"}
							fontWeight={"medium"}
							fontSize={"14px"}
							_active={{
								background:
									"linear-gradient(180deg, #04AA45 0%, #4DFB91 100%); ",
									boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)"
							}}
							boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25);"}
						>
							{t("register")}
						</Button>
					</>
				)}
			</ButtonGroup>
		</Flex>
	)
}

export default Header
