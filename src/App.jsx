import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Screen from "./Components/CalculatorBody/Screen";
import Keypad from "./Components/CalculatorBody/Keypad";
import CalcProvider from "./store/CalcProvider";
import { useState } from "react";

function App() {
	const [theme, setTheme] = useState("theme-dark");

	const onChangeTheme = (theme) => {
		setTheme(theme);
		console.log(theme);
	};

	return (
		<CalcProvider>
			<main className="max-w-[500px] mx-auto flex flex-col justify-center h-screen p-5">
				<Header onChangeTheme={onChangeTheme} />
				<Screen />
				<Keypad theme={theme} />
			</main>
			<Footer />
		</CalcProvider>
	);
}

export default App;
