import { chakra } from "@chakra-ui/react"

const ButtonDemo = chakra("button", {
	// attach style props
	baseStyle: {
		bg: "linear-gradient(134.01deg, #52F592 6.22%, #2DA55B 96.59%);",
		borderRadius: {
			base: "3.5px",
			sm: "5px",
		},
		fontSize: {
			base: "11px",
			sm: "13px",
		},
		h: {
			base: "40px",
			sm: "48px",
		},
		fontWeight: "700",
		width: {
			base: "190px",
			sm: "210px",
		},
		zIndex: "2",
		fontFamily: "Poppins",
		boxShadow: "0px 5px 15px rgba(70, 165, 98, 0.76);",
		_active: {
			transform: "translateY(1px)"
		}
	},
})
export default ButtonDemo
