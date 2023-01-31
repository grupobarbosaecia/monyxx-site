import React from "react"
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
					key={"ccd"}
					initialSlide={1}
					slidesPerView={1}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					draggable={false}
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
					key={"ccm"}
					initialSlide={1}
					grabCursor
					pagination={{
						dynamicBullets: true,
					}}
					slidesPerView={"auto"}
					spaceBetween={0}
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
