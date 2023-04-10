import { useContext } from "react";
import CalcContext from "../../store/calc-context";
import Button from "../Button";

const Keypad = (props) => {
	const ctx = useContext(CalcContext);

	let keyClasses = "text-text bg-allKey py-2 rounded text-calc shadow-keyShadow";
	let equalKey = props.theme === "theme-neon" ? "text-textDark" : "text-white";

	if (props.theme === "theme-neon" || props.theme === "theme-light") {
		keyClasses = "text-mainText bg-allKey py-2 rounded text-calc shadow-keyShadow";
	}

	const handleButtonClick = (event) => {
		const buttonValue = event.target.innerHTML;
		const regex = /\./;
		if (buttonValue === ".") {
			if (!regex.test(ctx.total)) {
				return ctx.addNum(buttonValue);
			}
		}
		if (buttonValue !== ".") {
			ctx.addNum(buttonValue);
		}
	};

	const handleResetClick = () => {
		ctx.reset();
	};

	const handleDeleteClick = () => {
		ctx.delete();
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
				className="text-white bg-keyBg py-2 rounded text-xl shadow-delResShadow md:rounded-lg"
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
			<Button className={`${keyClasses} md:rounded-lg`}>+</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				1
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				2
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				3
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>-</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				.
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`} onClick={handleButtonClick}>
				0
			</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>/</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>x</Button>
			<Button
				className="text-white text-xl bg-keyBg py-2 rounded shadow-delResShadow col-span-2 md:rounded-lg"
				onClick={handleResetClick}>
				RESET
			</Button>
			<Button className={`${equalKey} bg-togKey py-2 rounded text-calc shadow-equalShadow col-span-2 md:rounded-lg`}>
				=
			</Button>
		</section>
	);
};

export default Keypad;
