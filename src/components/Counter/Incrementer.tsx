import { useEffect, useState } from "react"

interface IIncrementer {
	defaultValue: number
}

const Incrementer: React.FC<IIncrementer> = ({
	defaultValue,
}: IIncrementer) => {
	const [count, setCount] = useState<number>(
		Number(new Date().getTime().toString().slice(-10, -2)) / defaultValue
	)

	useEffect(() => {
		const timer = setInterval(() => {
			setCount((value) => value + 6)
		}, 1500)
		return () => clearTimeout(timer)
	}, [])

	return <>{Intl.NumberFormat("de-DE").format(Math.floor(count))}</>
}

export default Incrementer
