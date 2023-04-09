import { createContext } from "react";

const CalcContext = createContext({
	total: 0,
	reset: () => {},
	del: () => {},
	calculate: (method) => {},
});

export default CalcContext;
