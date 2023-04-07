/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainBg: "var(--mainBg)",
				toggleBg: "var(--toggleBg)",
				keypadBg: "var(--keypadBg)",
				screenBg: "var(--screenBg)",
				mainText: "var(--mainText)",
				textDark: "var(--textDark)",
				text: "var(--text)",
				keyBg: "var(--keyBg)",
				keySh: "var(--keySh)",
				togKey: "var(--togKey)",
				togKeySh: "var(--togKeySh)",
				allKey: "var(--allKey)",
				allKeySh: "var(--allKey)",
			},
			fontSize: {
				calc: "2rem",
			},
		},
	},
	plugins: [],
};
