import { useContext, useState } from "react";
import CalcContext from "../../store/calc-context";
import Button from "../Button";

const Keypad = (props) => {
	const [isTouched, setIsTouched] = useState(false);
	const [hasDot, setHasDot] = useState(false);
	const ctx = useContext(CalcContext);

	let keyClasses = "text-text bg-allKey py-2 rounded text-calc shadow-keyShadow hover:opacity-80";
	let equalKey = props.theme === "theme-neon" ? "text-textDark" : "text-white";

	if (props.theme === "theme-neon" || props.theme === "theme-light") {
		keyClasses = "text-mainText bg-allKey py-2 rounded text-calc shadow-keyShadow hover:opacity-80";
	}

	const handleButtonClick = (event) => {
		const buttonValue = event.target.innerHTML;
		if (buttonValue === ".") {
			if (!hasDot) {
				setHasDot(true);
				return ctx.addNum(buttonValue);
			}
		}
		if (buttonValue !== ".") {
			ctx.addNum(buttonValue);
		}
		setIsTouched(false);
	};

	const handleResetClick = () => {
		ctx.reset();
	};

	const handleDeleteClick = () => {
		ctx.delete();
	};

	const handleAddition = () => {
		if (!isTouched) {
			ctx.calculate("+");
			setIsTouched(true);
			setHasDot(false);
		}
	};

	const handleSubstraction = () => {
		if (!isTouched) {
			ctx.calculate("-");
			setIsTouched(true);
			setHasDot(false);
		}
	};

	const handleMultiplication = () => {
		if (!isTouched) {
			ctx.calculate("*");
			setIsTouched(true);
			setHasDot(false);
		}
	};

	const handleDivision = () => {
		if (!isTouched) {
			ctx.calculate("/");
			setIsTouched(true);
			setHasDot(false);
		}
	};

	const handleEqualButton = () => {
		ctx.equals();
	};

	return (
		<section className="bg-keypadBg p-6 rounded-lg mt-5 grid grid-cols-4 gap-3 md:gap-5">
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				7
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				8
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				9
			</Button>
			<Button
				className="text-white bg-keyBg py-2 rounded text-xl shadow-delResShadow md:rounded-lg hover:opacity-80"
				onClick={handleDeleteClick}>
				DEL
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				4
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				5
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				6
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleAddition}>
				+
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				1
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				2
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				3
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleSubstraction}>
				-
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				.
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				0
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleDivision}>
				/
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleMultiplication}>
				*
			</Button>
			<Button
				className="text-white text-xl bg-keyBg py-2 rounded shadow-delResShadow col-span-2 md:rounded-lg hover:opacity-80"
				onClick={handleResetClick}>
				RESET
			</Button>
			<Button
				className={`${equalKey} bg-togKey hover:opacity-80 py-2 rounded text-calc shadow-equalShadow col-span-2 md:rounded-lg `}
				onClick={handleEqualButton}>
				=
			</Button>
		</section>
	);
};

export default Keypad;
