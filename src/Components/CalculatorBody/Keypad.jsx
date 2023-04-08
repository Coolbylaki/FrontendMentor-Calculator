import Button from "../Button";

const Keypad = (props) => {
	let keyClasses = "text-text bg-allKey py-2 rounded text-calc shadow-keyShadow";
	let equalKey = props.theme === "theme-neon" ? "text-textDark" : "text-white";

	if (props.theme === "theme-neon" && props.theme) {
		keyClasses = "text-mainText bg-allKey py-2 rounded text-calc shadow-keyShadow";
	}
	return (
		<main className="bg-keypadBg p-6 rounded-lg mt-5 grid grid-cols-4 gap-3">
			<Button className={keyClasses}>7</Button>
			<Button className={keyClasses}>8</Button>
			<Button className={keyClasses}>9</Button>
			<Button className="text-white bg-keyBg py-2 rounded text-xl shadow-delResShadow">DEL</Button>
			<Button className={keyClasses}>4</Button>
			<Button className={keyClasses}>5</Button>
			<Button className={keyClasses}>6</Button>
			<Button className={keyClasses}>+</Button>
			<Button className={keyClasses}>1</Button>
			<Button className={keyClasses}>2</Button>
			<Button className={keyClasses}>3</Button>
			<Button className={keyClasses}>-</Button>
			<Button className={keyClasses}>.</Button>
			<Button className={keyClasses}>0</Button>
			<Button className={keyClasses}>/</Button>
			<Button className={keyClasses}>x</Button>
			<Button className="text-white text-xl bg-keyBg py-2 rounded shadow-delResShadow col-span-2">RESET</Button>
			<Button className={`${equalKey} bg-togKey py-2 rounded text-calc shadow-equalShadow col-span-2`}>=</Button>
		</main>
	);
};

export default Keypad;
