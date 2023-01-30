import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import CardComment from "./Cards/CardsComments"
import "./CarouselComments.css"

// import required modules
import { Pagination, Navigation } from "swiper"
import { user } from "./types"
import { useBreakpointValue } from "@chakra-ui/react"

const CarouselComments: React.FC<{ users: user[] }> = ({ users }) => {
	const isMobile = useBreakpointValue({
		base: false,
		md: true,
	})
	return (
		<>
			{isMobile ? (
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="swiperComments"
				>
					{users.map((user, index) => (
						<SwiperSlide key={index}>
							<CardComment user={user} />
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<Swiper
					grabCursor
					pagination={{
						dynamicBullets: true,
					}}
					slidesPerView={"auto"}
					spaceBetween={50}
					centeredSlides={true}
					modules={[Pagination]}
					draggable={true}
					className="mySwiper comments"
				>
					{users.map((user, index) => (
						<SwiperSlide key={index}>
							<CardComment user={user} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</>
	)
}

export default CarouselComments
