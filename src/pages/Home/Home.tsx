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
import clipBg from "../../assets/icons/clipBg.svg"
import clipBgDesktop from "../../assets/icons/clipBgDesktop.svg"
import Carousel from "../../components/Carousel/Carousel"
import TECNOLOGIA1 from "../../assets/TECNOLOGIA1.png"
import VELOCIDADE1 from "../../assets/VELOCIDADE1.png"
import INTERFACE1 from "../../assets/INTERFACE1.png"
import CADASTRESE1 from "../../assets/CADASTRESE1.png"
import DEPOSITE1 from "../../assets/DEPOSITE1.png"
import NEGOCIACOES1 from "../../assets/NEGOCIACOES1.png"
import Phone from "../../assets/Phone.png"
import RightCloud from "../../assets/RightCloud.png"
import LeftCloud from "../../assets/LeftCloud.png"
import Footer from "../../components/Footer/Footer"
import CarouselComments from "../../components/CarouselComments/CarouselComments"
import { useTranslation } from "react-i18next"
import { largeArrowIcon } from "../../assets/icons"
import { ArrowUpIcon } from "@chakra-ui/icons"
import velha from "../../assets/velha.jpg"
import novinha from "../../assets/novinha.jpg"
import alvaro from "../../assets/alvaro.jpg"
import Incrementer from "../../components/Counter/Incrementer"

const Home: React.FC = () => {
	const { t } = useTranslation("main")
	const isTablet = useBreakpointValue({
		base: false,
		md: true,
	})

	return (
		<Stack
			bg={"monyxxColors.100"}
			minH={"100vh"}
			w={"100%"}
			py={"7"}
			gap={"20"}
			pb={"0"}
		>
			<Header />
			{/* First Section */}
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
				id={"SecondSection"}
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
			{/* Second Section */}
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
					>
						<Text
							fontSize={{
								base: "16px",
								md: "15px",
								"2xl": "18px",
							}}
						>
							<Incrementer defaultValue={40} />
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
					>
						<Text
							fontSize={{
								base: "16px",
								md: "15px",
								"2xl": "18px",
							}}
						>
							<Incrementer defaultValue={5} />
						</Text>
						<Text fontSize={14}>
							{t("secondSection.secondCard")}
						</Text>
					</Flex>
				</Flex>
			</Flex>
			{/* Third Section */}
			<Flex
				mt={"-150px !important"}
				alignItems={"center"}
				justifyContent={"center"}
				flexDirection={"column"}
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
					base: "1350px",
					sm: "1430px",
					lg: "1490px",
					"2xl": "1600px",
				}}
			>
				<Heading
					mb={{
						base: "-30px",
						sm: "-50px",
						md: "150px",
						lg: "150px",
					}}
					mt={{
						base: "80px",
						sm: "100px",
						md: 0,
					}}
					color={"monyxxColors.200"}
					w={{
						base: "80%",
						sm: "60%",
					}}
					fontWeight={600}
					textAlign={"center"}
				>
					{t("thirdSection.header")}
				</Heading>
				<Carousel
					cards={[
						{
							header: t("thirdSection.firstCard.header"),
							subtitle: t("thirdSection.firstCard.subtitle"),
							imgsrc: INTERFACE1,
						},
						{
							header: t("thirdSection.secondCard.header"),
							subtitle: t("thirdSection.secondCard.subtitle"),
							imgsrc: VELOCIDADE1,
						},
						{
							header: t("thirdSection.thirdCard.header"),
							subtitle: t("thirdSection.thirdCard.subtitle"),
							imgsrc: TECNOLOGIA1,
						},
					]}
				></Carousel>
				{isTablet && (
					<ButtonDemo
						mt={{
							base: "-40px",
							md: 10,
						}}
					>
						{t("cta")}
					</ButtonDemo>
				)}
			</Flex>
			{/* Fourth Section */}
			<Flex
				id="FourthSection"
				mt={{
					base: "-230px !important",
					md: "0 !important",
				}}
				px={["5", "16", "20", "36", "60"]}
				gap={10}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDirection={{
					base: "column",
					md: "row",
				}}
				backgroundPosition={"center"}
				backgroundSize={"cover"}
			>
				<Flex
					w={{
						base: "100%",
						md: "70%",
						xl: "75%",
					}}
					maxW={{
						base: "550px",
					}}
					gap={{
						base: 6,
						sm: 2,
						xl: 4,
					}}
					textAlign={{
						base: "left",
						sm: "center",
						md: "left",
					}}
					alignItems={{
						base: "center",
						md: "flex-start",
					}}
					flexDir={"column"}
				>
					<Heading
						fontSize={{
							base: 22,
							xl: 26,
						}}
					>
						{t("fourthSection.header")}
					</Heading>
					<Text
						fontSize={{
							base: 16,
							sm: 14,
							xl: 16,
						}}
					>
						{t("fourthSection.subtitle")}
					</Text>
					<ButtonDemo
						display={{
							base: "none",
							md: "block",
						}}
					>
						{t("cta")}
					</ButtonDemo>
				</Flex>
				<Stack
					gap={6}
					maxW={{
						base: "630px",
					}}
				>
					<Stack
						bg={"monyxxColors.degrade.black"}
						px={6}
						py={4}
						borderRadius={12}
						boxShadow={"-29px 60px 90px rgba(3, 17, 27, 0.5)"}
					>
						<Heading
							fontSize={{
								base: 15,
								sm: 17,
							}}
							fontWeight={600}
						>
							{t("fourthSection.firstCard.header")}
						</Heading>
						<Text
							fontSize={{
								base: 12,
								sm: 14,
							}}
						>
							{t("fourthSection.firstCard.subtitle")}
						</Text>
					</Stack>
					<Stack
						bg={"monyxxColors.degrade.black"}
						px={6}
						py={4}
						borderRadius={12}
						boxShadow={"-29px 60px 90px rgba(3, 17, 27, 0.5)"}
					>
						<Heading
							fontSize={{
								base: 15,
								sm: 17,
							}}
							fontWeight={600}
						>
							{t("fourthSection.secondCard.header")}
						</Heading>
						<Text
							fontSize={{
								base: 12,
								sm: 14,
							}}
						>
							{t("fourthSection.secondCard.subtitle")}
						</Text>
					</Stack>
					<Stack
						bg={"monyxxColors.degrade.black"}
						px={6}
						py={4}
						borderRadius={12}
						boxShadow={"-29px 60px 90px rgba(3, 17, 27, 0.5)"}
					>
						<Heading
							fontSize={{
								base: 15,
								sm: 17,
							}}
							fontWeight={600}
						>
							{t("fourthSection.thirdCard.header")}
						</Heading>
						<Text
							fontSize={{
								base: 12,
								sm: 14,
							}}
						>
							{t("fourthSection.thirdCard.subtitle")}
						</Text>
					</Stack>
					<Stack
						bg={"monyxxColors.degrade.black"}
						px={6}
						py={4}
						borderRadius={12}
						boxShadow={"-29px 60px 90px rgba(3, 17, 27, 0.5)"}
					>
						<Heading
							fontSize={{
								base: 15,
								sm: 17,
							}}
							fontWeight={600}
						>
							{t("fourthSection.fourthCard.header")}
						</Heading>
						<Text
							fontSize={{
								base: 12,
								sm: 14,
							}}
						>
							{t("fourthSection.fourthCard.subtitle")}
						</Text>
					</Stack>
				</Stack>
				<ButtonDemo
					display={{
						base: "block",
						md: "none",
					}}
				>
					{t("cta")}
				</ButtonDemo>
			</Flex>
			{/* fifth Section */}
			<Flex
				mt={"-150px !important"}
				alignItems={"center"}
				justifyContent={"center"}
				flexDirection={"column"}
				width={"100vw"}
				h={"400px"}
				zIndex={3}
				transform={"rotateY(180deg)"}
				bg={{
					base: "url(" + clipBg + ")",
					sm: "url(" + clipBgDesktop + ")",
				}}
				style={{
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
				minH={{
					base: "1350px",
					sm: "1430px",
					lg: "1490px",
					"2xl": "1600px",
				}}
			>
				<Heading
					transform={"rotateY(180deg)"}
					mb={{
						base: "-30px",
						sm: "-50px",
						md: "150px",
						lg: "150px",
					}}
					mt={{
						base: "80px",
						sm: "100px",
						md: 0,
					}}
					color={"monyxxColors.200"}
					w={{
						base: "80%",
						sm: "60%",
					}}
					fontWeight={600}
					textAlign={"center"}
				>
					{t("fifthSection.header")}
				</Heading>
				<Carousel
					transform={"rotateY(180deg)"}
					cards={[
						{
							header: t("fifthSection.firstCard.header"),
							subtitle: t("fifthSection.firstCard.subtitle"),
							imgsrc: CADASTRESE1,
						},
						{
							header: t("fifthSection.secondCard.header"),
							subtitle: t("fifthSection.secondCard.subtitle"),
							imgsrc: DEPOSITE1,
						},
						{
							header: t("fifthSection.thirdCard.header"),
							subtitle: t("fifthSection.thirdCard.subtitle"),
							imgsrc: NEGOCIACOES1,
						},
					]}
				></Carousel>
				{isTablet && (
					<ButtonDemo
						mt={{
							base: "-40px",
							md: 12,
						}}
						transform={"rotateY(180deg)"}
						_active={{
							transform: " rotateY(180deg) translateY(1px)",
						}}
					>
						{t("cta")}
					</ButtonDemo>
				)}
			</Flex>
			{/* Sixth Section */}
			<Flex
				h={"auto"}
				position={"relative"}
				px={["5", "16", "20", "36", "60"]}
				alignItems={"center"}
				justifyContent={"center"}
				mt={{
					base: "-400px !important",
					lg: "-100px !important",
				}}
				flexDir={{
					base: "column-reverse",
					lg: "row",
				}}
			>
				<Image
					src={RightCloud}
					position={"absolute"}
					right={{
						base: "50%",
						lg: "-60%",
						"2xl": "-45%",
					}}
					minWidth={{
						base: "480px",
					}}
					height={{
						base: "auto",
						sm: "700px",
						lg: "900px",
						xl: "1000px",
					}}
					bottom={{
						base: "220px",
						sm: "190px",
						lg: "-30px",
						xl: "-150px",
					}}
					transform={{
						base: "translateX(53%)",
						lg: "translateX(-50%)",
					}}
				/>
				<Image
					src={LeftCloud}
					position={"absolute"}
					left={{
						base: "-33%",
						xl: "-35%",
						"2xl": "-10%",
					}}
					minW={{
						base: "400px",
						md: "auto",
					}}
					top={{
						base: "1650px",
						md: "1200px",
						lg: "480px",
					}}
					w={{
						base: "700px",
						md: "auto",
					}}
					height={{
						base: "auto",
						md: "600px",
						lg: "700px",
						xl: "800px",
					}}
				/>
				<ButtonDemo
					display={{
						base: "block",
						lg: "none",
					}}
					mt={{
						base: "70px",
						lg: "none",
					}}
				>
					{t("cta")}
				</ButtonDemo>
				<Image
					src={Phone}
					h={{
						base: "300px",
						lg: "400px",
					}}
					zIndex={5}
					mt={{
						base: "40px",
					}}
					minW={{
						base: "350px",
					}}
				></Image>
				<Flex
					ml={{
						base: "30px",
						sm: "50px",
						lg: "0",
					}}
					flexDirection={"column"}
					gap={4}
					justifyContent={"center"}
					zIndex={5}
					minW={{
						base: "290px",
					}}
					maxW={{
						base: "330px",
						sm: "auto",
					}}
					w={{
						base: "auto",
						sm: "450px",
						lg: "auto",
					}}
				>
					<Heading
						fontSize={{
							base: 20,
							sm: 26,
						}}
						mixBlendMode={"difference"}
						blendMode={"overlay"}
						color={{
							base: "monyxxColors.200",
							lg: "white.0",
						}}
						textAlign={{
							base: "center",
							lg: "left",
						}}
					>
						{t("sixthSection.header")}
					</Heading>
					<Text
						fontSize={14}
						textAlign={{
							base: "center",
							lg: "left",
						}}
						color={{
							base: "monyxxColors.200",
							lg: "white.0",
						}}
					>
						{t("sixthSection.subtitle")}
					</Text>
					<ButtonDemo
						display={{
							base: "none",
							lg: "block",
						}}
						alignSelf={{
							base: "center",
							lg: "auto",
						}}
					>
						{t("cta")}
					</ButtonDemo>
				</Flex>

				<Box h={"400px"}></Box>
			</Flex>
			{/* Last Section */}
			<Flex
				id={"LastSection"}
				flexDir={"column"}
				px={["0", "0", "20", "36", "60"]}
				justifyContent={"center"}
				alignItems={"center"}
				zIndex={5}
			>
				<Heading
					fontSize={{
						base: 22,
						sm: 26,
					}}
					w={{
						base: "70%",
						md: "100%",
					}}
					textAlign={{
						base: "center",
						md: "center",
					}}
				>
					{t("lastSection.header")}
				</Heading>
				<CarouselComments
					users={[
						{
							name: "Elizabeth Nunes",
							id: "198736",
							comment:
								"From my experience with the platform I can say that I liked it very much and I think everyone should get to know it. Very secure and easy to use.",
							image: novinha,
						},
						{
							name: "García Rodriguez",
							id: "087341",
							comment:
								"He estado haciendo mis operaciones en Monyxx durante más de 3 semanas y Mis experiencias con el corredor son 100% buenas, todos mis retiros se realizaron y mis depósitos se realizaron en uns segundos, lo que me ayuda a mantener mis transacciones.",
							image: alvaro,
						},
						{
							name: "Ana Silveira Lima",
							id: "254673",
							comment:
								"Plataforma incrível e com apenas um pouco da minha renda extra, consegui aumentar e melhorar minha vida. Continuem assim monyxx belo trabalho e muito sucesso",
							image: velha,
						},
					]}
				/>
			</Flex>
			<Footer />
			{/* Up to Home */}
			<Flex
				position={"fixed"}
				bottom={"20px"}
				right={"30px"}
				bg={"monyxxColors.degrade.black"}
				w={"50px"}
				h={"50px"}
				zIndex={999}
				borderRadius={"50%"}
				justifyContent={"center"}
				alignItems={"center"}
				boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
				onClick={() => window.scrollTo(0, 0)}
			>
				<ArrowUpIcon boxSize={6} />
			</Flex>
		</Stack>
	)
}

export default Home
