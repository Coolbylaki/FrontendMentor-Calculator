/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				T1: {
					mainBg: "hsl(222, 26%, 31%)",
					toggleBg: "hsl(223, 31%, 20%)",
					keypadBg: "hsl(223, 31%, 20%)",
					screenBg: "hsl(224, 36%, 15%)",
					text: "hsl(221, 14%, 31%)",
					keyBg: "hsl(225, 21%, 49%)",
					keySh: "hsl(224, 28%, 35%)",
					togKey: "hsl(6, 63%, 50%)",
					togKeySh: "hsl(6, 70%, 34%)",
					allKey: "hsl(30, 25%, 89%)",
					allKeySh: "hsl(28, 16%, 65%)",
				},
				T2: {
					mainBg: "hsl(0, 0%, 90%)",
					toggleBg: "hsl(0, 5%, 81%)",
					keypadBg: "hsl(0, 5%, 81%)",
					screenBg: "hsl(0, 0%, 93%)",
					text: "hsl(60, 10%, 19%)",
					keyBg: "hsl(185, 42%, 37%)",
					keySh: "hsl(185, 58%, 25%)",
					togKey: "hsl(25, 98%, 40%)",
					togKeySh: "hsl(25, 99%, 27%)",
					allKey: "hsl(45, 7%, 89%)",
					allKeySh: "hsl(35, 11%, 61%)",
				},
				T3: {
					mainBg: "hsl(268, 75%, 9%)",
					toggleBg: "hsl(268, 71%, 12%)",
					keypadBg: "hsl(268, 71%, 12%)",
					screenBg: "hsl(268, 71%, 12%)",
					textLight: "hsl(52, 100%, 62%)",
					textDark: "hsl(198, 20%, 13%)",
					keyBg: "hsl(281, 89%, 26%)",
					keySh: "hsl(285, 91%, 52%)",
					togKey: "hsl(176, 100%, 44%)",
					togKeySh: "hsl(177, 92%, 70%)",
					allKey: "hsl(268, 47%, 21%)",
					allKeySh: "hsl(290, 70%, 36%)",
				},
			},
			fontSize: {
				calc: "2rem",
			},
		},
	},
	plugins: [],
};
