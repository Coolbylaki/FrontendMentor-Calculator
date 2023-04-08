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
				allKeySh: "var(--allKeySh)",
			},
			fontSize: {
				calc: "2rem",
			},
			boxShadow: {
				keyShadow: "inset 0 -0.15em var(--allKeySh)",
				delResShadow: "inset 0 -0.25em var(--keySh)",
				equalShadow: "inset 0 -0.15em var(--togKeySh)",
			},
		},
	},
	plugins: [],
};
