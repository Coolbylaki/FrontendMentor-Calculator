import Button from "../Button";

const Keypad = (props) => {
	let keyClasses = "text-text bg-allKey py-2 rounded text-calc shadow-keyShadow";
	let equalKey = props.theme === "theme-neon" ? "text-textDark" : "text-white";

	if (props.theme === "theme-neon" && props.theme) {
		keyClasses = "text-mainText bg-allKey py-2 rounded text-calc shadow-keyShadow";
	}
	return (
		<section className="bg-keypadBg p-6 rounded-lg mt-5 grid grid-cols-4 gap-3 md:gap-5">
			<Button className={`${keyClasses} md:rounded-lg`}>7</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>8</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>9</Button>
			<Button className="text-white bg-keyBg py-2 rounded text-xl shadow-delResShadow md:rounded-lg">DEL</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>4</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>5</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>6</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>+</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>1</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>2</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>3</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>-</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>.</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>0</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>/</Button>
			<Button className={`${keyClasses} md:rounded-lg`}>x</Button>
			<Button className="text-white text-xl bg-keyBg py-2 rounded shadow-delResShadow col-span-2 md:rounded-lg">
				RESET
			</Button>
			<Button className={`${equalKey} bg-togKey py-2 rounded text-calc shadow-equalShadow col-span-2 md:rounded-lg`}>
				=
			</Button>
		</section>
	);
};

export default Keypad;
