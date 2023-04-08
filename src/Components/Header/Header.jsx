import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

const Header = (props) => {
	return (
		<header className="flex justify-between">
			<h1 className="text-mainText text-calc">calc</h1>
			<ThemeSwitch onChangeTheme={props.onChangeTheme} />
		</header>
	);
};

export default Header;
