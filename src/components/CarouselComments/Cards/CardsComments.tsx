import {
	Flex,
	Text,
	Box,
	Heading,
	FlexProps,
	Image,
	useBreakpointValue,
} from "@chakra-ui/react"
import { user } from "../types"

interface CardCommentProps extends FlexProps {
	user: user
}

const CardComment: React.FC<CardCommentProps> = (props: CardCommentProps) => {
	const linesMobile = useBreakpointValue({
		base: "12",
		md: "5",
	})

	return (
		<Flex
			mt={{
				base: "-140px",
				sm: "0",
			}}
			w={"full"}
			maxW={{
				base: "none",
				md: "600px",
			}}
			h={{
				base: "full",
				md: "230px",
			}}
			maxH={{
				base: "430px",
				md: "230px",
			}}
			borderRadius={11}
			bg={"monyxxColors.degrade.black"}
			px={10}
			py={6}
			alignItems={"center"}
			justifyContent={{
				base: "space-between",
			}}
			flexDirection={"column"}
			gap={2}
		>
			<Text
				display={"-webkit-box"}
				w={{
					base: "95%",
					md: "80%",
				}}
				fontSize={{
					base: 15,
					sm: 16,
				}}
				textAlign={"justify"}
				textOverflow={"ellipsis"}
				overflow={"hidden"}
				// whiteSpace={"nowrap"}
				wordBreak={"keep-all"}
				maxHeight={{
					base: "300px",
					md: "120px",
				}}
				style={{
					WebkitLineClamp: linesMobile,
					WebkitBoxOrient: "vertical",
				}}
				color={{
					base: "white.0",
					md: "auto",
				}}
			>
				{props.user.comment}
			</Text>
			<Flex gap={2}>
				{props.user.image ? (
					<Image
						bg={"#716F8C"}
						w={"40px"}
						h={"40px"}
						borderRadius={"50%"}
						src={props.user.image}
					></Image>
				) : (
					<Box
						bg={"#716F8C"}
						w={"40px"}
						h={"40px"}
						borderRadius={"50%"}
					></Box>
				)}
				<Flex
					textAlign={"left"}
					justifyContent={"center"}
					flexDir={"column"}
				>
					<Heading
						fontSize={14}
						color={{
							base: "white.0",
							md: "auto",
						}}
					>
						{props.user.name}
					</Heading>
					<Text
						fontSize={12}
						color={{
							base: "white.0",
							md: "auto",
						}}
					>
						<>ID {props.user.id}</>
					</Text>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default CardComment
