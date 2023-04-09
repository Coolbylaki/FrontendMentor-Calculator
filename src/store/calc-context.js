import { createContext } from "react";

const CalcContext = createContext({
	total: 0,
	totalString: "",
	reset: () => {},
	del: () => {},
	calculate: (method) => {},
});

export default CalcContext;
