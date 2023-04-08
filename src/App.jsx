import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Screen from "./Components/CalculatorBody/Screen";
import Keypad from "./Components/CalculatorBody/Keypad";
import { useState } from "react";

function App() {
	const [theme, setTheme] = useState("theme-dark");

	const onChangeTheme = (theme) => {
		setTheme(theme);
		console.log(theme);
	};

	return (
		<>
			<Header onChangeTheme={onChangeTheme} />
			<Footer />
			<Screen />
			<Keypad theme={theme} />
		</>
	);
}

export default App;
