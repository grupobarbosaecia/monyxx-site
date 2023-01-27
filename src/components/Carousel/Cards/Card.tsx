import { Flex, BoxProps, Heading, Text } from "@chakra-ui/react"

interface CardProps extends BoxProps {
	header: string
	subtitle: String
	imgsrc: string
}

const Card: React.FC<CardProps> = (props: CardProps) => {
	return (
		<Flex
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
			backdropFilter={"blur(12.5px)"}
			_after={{
				content: "''",
				background: "url(" + props.imgsrc + ")",
				position: "absolute",
				width: "300px",
				height: "300px",
				top: "-35%",
				left: "50%",
				transform: "translateX(-50%)",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				zIndex: 10,
			}}
		>
			<Heading
				fontSize={18}
				w={"85%"}
				color={"white.0"}
				fontWeight={"500"}
			>
				{props.header}
			</Heading>
			<Text
				fontSize={13}
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
