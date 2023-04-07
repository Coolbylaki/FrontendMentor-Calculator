import { useRef } from "react";
import classes from "./ThemeSwitch.module.css";

const ThemeSwitch = (props) => {
	const ballRef = useRef();

	function changeThemeHandler(e) {
		const theme = e.target.value;

		if (theme === "theme-dark") {
			ballRef.current.style.setProperty("--i", "5");
			document.getElementById("root").classList.remove("theme-light");
			document.getElementById("root").classList.remove("theme-neon");

			document.getElementById("root").classList.add("theme-dark");
		} else if (theme === "theme-light") {
			ballRef.current.style.setProperty("--i", "30");
			document.getElementById("root").classList.remove("theme-neon");
			document.getElementById("root").classList.remove("theme-dark");

			document.getElementById("root").classList.add("theme-light");
		} else {
			ballRef.current.style.setProperty("--i", "55");
			document.getElementById("root").classList.remove("theme-dark");
			document.getElementById("root").classList.remove("theme-light");

			document.getElementById("root").classList.add("theme-neon");
		}
	}

	return (
		<div className="flex items-center">
			<div className="bg-toggleBg h-[1.5rem] w-[75px] rounded-[50rem] relative flex justify-center">
				<div className="w-[30%] relative left-2">
					<label className="w-full absolute bottom-[100%] left-0 text-xs text-mainText ">1</label>
					<input
						type="radio"
						name="theme"
						value="theme-dark"
						id="theme-dark"
						defaultChecked
						className="h-full w-[30px] opacity-0 block cursor-pointer"
						onChange={changeThemeHandler}
					/>
				</div>
				<div className="w-[30%] relative text-center">
					<label className="w-full absolute bottom-[100%] left-0 text-xs text-mainText">2</label>
					<input
						type="radio"
						name="theme"
						value="theme-light"
						id="theme-light"
						className="mx-auto h-full w-[30px] opacity-0 block cursor-pointer"
						onChange={changeThemeHandler}
					/>
				</div>
				<div className="w-[30%] relative text-right right-2">
					<label className="w-full absolute bottom-[100%] left-0 text-xs text-mainText">3</label>
					<input
						type="radio"
						name="theme"
						value="theme-neon"
						id="theme-neon"
						className="ml-auto h-full w-[30px] opacity-0 block cursor-pointer"
						onChange={changeThemeHandler}
					/>
				</div>
				<div
					className={`pointer-events-none w-[1rem] h-[1rem] bg-togKey rounded-[50rem] absolute top-[4px] ${classes["left-calc"]} transition-left duration-500 ease-in-out transform`}
					ref={ballRef}></div>
				<h3 className="absolute text-xs left-[-3.5rem] text-mainText top-[8px]">THEME</h3>
			</div>
		</div>
	);
};

export default ThemeSwitch;
