import { createContext } from "react";

const CalcContext = createContext({
	total: 0,
	displayNum: (num) => {},
	reset: () => {},
	del: () => {},
	calculate: (method) => {},
});

export default CalcContext;
