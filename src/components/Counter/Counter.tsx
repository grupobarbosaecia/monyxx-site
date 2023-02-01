import { useState, useMemo, useEffect } from "react"
import { Box } from "@chakra-ui/react"

interface ICounter {
	start: number
	end: number
}

const Counter: React.FC<ICounter> = ({ start, end }: ICounter) => {
	const [count, setCount] = useState(start)
	const increment = useMemo(() => end / 300, [end])

	const doIncrement = () => {
		if (count < end) {
			const timer = setTimeout(
				() =>
					setCount(
						Math.floor(
							count < end - increment ? count + increment : end
						)
					),
				1
			)
			return () => clearTimeout(timer)
		}
	}

	useEffect(doIncrement, [count, end, increment])

	return <Box>{Intl.NumberFormat("de-DE").format(count)}</Box>
}

export default Counter
