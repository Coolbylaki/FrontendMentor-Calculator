import { useRef } from "react";
import classes from "./ThemeSwitch.module.css";

const ThemeSwitch = (props) => {
	const ballRef = useRef();

	function changeThemeHandler(e) {
		const theme = e.target.value;

		if (theme === "theme2") {
			ballRef.current.style.setProperty("--i", "30");
		} else if (theme === "theme3") {
			ballRef.current.style.setProperty("--i", "55");
		} else {
			ballRef.current.style.setProperty("--i", "5");
		}
	}

	return (
		<div className="flex items-center">
			<div className="bg-T1-toggleBg h-[1.5rem] w-[75px] rounded-[50rem] relative flex justify-center">
				<div className="w-[30%] relative left-2">
					<label className="w-full absolute bottom-[100%] left-0 text-xs text-white ">1</label>
					<input
						type="radio"
						name="theme"
						value="theme1"
						id="theme1"
						defaultChecked
						className="h-full w-[30px] opacity-0 block cursor-pointer"
						onChange={changeThemeHandler}
					/>
				</div>
				<div className="w-[30%] relative text-center">
					<label className="w-full absolute bottom-[100%] left-0 text-xs text-white">2</label>
					<input
						type="radio"
						name="theme"
						value="theme2"
						id="theme2"
						className="mx-auto h-full w-[30px] opacity-0 block cursor-pointer"
						onChange={changeThemeHandler}
					/>
				</div>
				<div className="w-[30%] relative text-right right-2">
					<label className="w-full absolute bottom-[100%] left-0 text-xs text-white">3</label>
					<input
						type="radio"
						name="theme"
						value="theme3"
						id="theme3"
						className="ml-auto h-full w-[30px] opacity-0 block cursor-pointer"
						onChange={changeThemeHandler}
					/>
				</div>
				<div
					className={`pointer-events-none w-[1rem] h-[1rem] bg-T1-togKey rounded-[50rem] absolute top-[4px] ${classes["left-calc"]} transition-left duration-500 ease-in-out transform`}
					ref={ballRef}></div>
				<h3 className="absolute text-xs left-[-3.5rem] text-white top-[8px]">THEME</h3>
			</div>
		</div>
	);
};

export default ThemeSwitch;
