import React, { useRef, useState } from "react"
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
import TECNOLOGIA1 from "../../assets/TECNOLOGIA1.png"
import VELOCIDADE1 from "../../assets/VELOCIDADE1.png"
import INTERFACE1 from "../../assets/INTERFACE1.png"

const Carousel: React.FC = () => {
	const isTablet = useBreakpointValue({
		base: 30,
		md: 30,
		lg: 40,
		xl: 60,
	})

	const cards = [
		{
			header: "Interface de negociação moderna e futurística",
			subtitle: "Faça suas negociações de uma forma diferente e moderna",
			imgsrc: INTERFACE1,
		},
		{
			header: "Interface de negociação moderna e futurística",
			subtitle: "Faça suas negociações de uma forma diferente e moderna",
			imgsrc: INTERFACE1,
		},
		{
			header: "Interface de negociação moderna e futurística",
			subtitle: "Faça suas negociações de uma forma diferente e moderna",
			imgsrc: INTERFACE1,
		},
	]

	return (
		<Flex
			w={"100%"}
			gap={{
				base: 10,
				md: 15,
				xl: 20,
			}}
			height={{
				base: "800px",
				md: "370px",
			}}
			// px={["10", "16", "20", "20", "60"]}
			px={{
				base: 10,
				sm: 16,
				md: 20,
				lg: 36,
				"2xl": 80,
			}}
		>
			{isTablet ? (
				cards.map((card) => (
					<Card
						header={card.header}
						subtitle={card.subtitle}
						imgsrc={card.imgsrc}
					/>
				))
			) : (
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					slidesPerView={3}
					spaceBetween={isTablet}
					modules={[Pagination]}
					draggable={false}
					className="mySwiper"
					// centeredSlides
				>
					{cards.map((card) => (
						<SwiperSlide>
							<Card
								header={card.header}
								subtitle={card.subtitle}
								imgsrc={card.imgsrc}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</Flex>
	)
}

export default Carousel
