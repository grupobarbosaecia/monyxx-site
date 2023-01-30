import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import "./carousel.css"

// import required modules
import { Pagination } from "swiper"
import { Flex, useBreakpointValue } from "@chakra-ui/react"
import Card from "./Cards/Card"

interface ICardCarousel {
	header: string
	subtitle: string
	imgsrc: string
}
interface ICarousel extends JSX.Element {
	cards: ICardCarousel[]
	transform?: string
}

const Carousel: React.FC<{ cards: ICardCarousel[]; transform?: string }> = ({
	cards,
	transform,
}) => {
	const isMobile = useBreakpointValue({
		base: 50,
		sm: 50,
	})

	const isCarousel = useBreakpointValue({
		base: true,
		md: false,
	})

	return (
		<Flex
			w={"100%"}
			gap={{
				base: 14,
				md: 6,
				xl: 10,
				"2xl": 15,
			}}
			height={{
				base: "680px",
				md: "300px",
				lg: "370px",
			}}
			px={{
				base: 0,
				sm: 0,
				md: 20,
				lg: 36,
				xl: 56,
				"2xl": 80,
			}}
			transform={transform}
		>
			{!isCarousel ? (
				cards.map((card, index) => (
					<Card
						key={index}
						header={card.header}
						subtitle={card.subtitle}
						imgsrc={card.imgsrc}
					/>
				))
			) : (
				<Swiper
					key={"co1"}
					initialSlide={1}
					grabCursor
					pagination={{
						dynamicBullets: true,
					}}
					slidesPerView={"auto"}
					spaceBetween={isMobile}
					centeredSlides={true}
					modules={[Pagination]}
					draggable={true}
					className="mySwiper"
				>
					{cards.map((card, index) => (
						<SwiperSlide key={index}>
							<Card
								header={card.header}
								subtitle={card.subtitle}
								imgsrc={card.imgsrc}
								className={"cardCarousel"}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</Flex>
	)
}

export default Carousel
