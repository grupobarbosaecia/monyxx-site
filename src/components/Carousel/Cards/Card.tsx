import { Flex, FlexProps, Heading, Text } from "@chakra-ui/react"

interface CardProps extends FlexProps {
	header: string
	subtitle: String
	imgsrc: string
}

const Card: React.FC<CardProps> = (props: CardProps) => {
	return (
		<Flex
			className={props.className}
			flexDir={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			textAlign={"center"}
			gap={2}
			pt={"100px"}
			w={"full"}
			h={"full"}
			bg={"monyxxColors.degrade.black"}
			rounded={"12px"}
			position={"relative"}
			boxShadow={"-29px 60px 90px rgba(22, 24, 22, 0.45)"}
			_after={{
				content: "''",
				background: "url(" + props.imgsrc + ")",
				position: "absolute",
				width: "80%",
				height: {
					base: "50%",
					md: "70%",
					xl: "80%",
				},
				top: {
					md: "-25%",
					xl: "-35%",
				},
				left: "50%",
				transform: "translateX(-50%)",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				zIndex: 10,
			}}
		>
			<Heading
				className="cardHeading"
				fontSize={{
					sm: 16,
					md: 16,
					lg: 18,
					xl: 20,
					"2xl": 22,
					"3xl": 24,
				}}
				w={{
					base: "95%",
					"2xl": "85%",
					"3xl": "90%",
				}}
				color={"white.0"}
				fontWeight={"500"}
			>
				{props.header}
			</Heading>
			<Text
				className="cardSubtitle"
				fontSize={{
					base: 13,
					xl: 15,
					"2xl": 16,
					"3xl": 18,
				}}
				w={"85%"}
				color={"white.0"}
				fontWeight={"normal"}
			>
				{props.subtitle}
			</Text>
		</Flex>
	)
}

export default Card
