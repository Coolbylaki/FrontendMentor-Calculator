import { useReducer } from "react";
import CalcContext from "./calc-context";

const defaultCalcState = {
	total: 0,
	totalString: "",
};

const calcReducer = (state, action) => {
	return defaultCalcState;
};

const CalcProvider = (props) => {
	const [calcState, dispatchCalcAction] = useReducer(calcReducer, defaultCalcState);

	const resetHandler = () => {
		dispatchCalcAction({ type: "RESET" });
	};

	const deleteHandler = () => {
		dispatchCalcAction({ type: "DELETE" });
	};

	const calculator = (method) => {
		if (method === "x" && method) {
			dispatchCalcAction({ type: "MULTIPLY" });
		} else if (method === "/" && method) {
			dispatchCalcAction({ type: "DIVIDE" });
		} else if (method === "+" && method) {
			dispatchCalcAction({ type: "ADD" });
		} else if (method === "-" && method) {
			dispatchCalcAction({ type: "SUBSTRACT" });
		}
	};

	const calcContext = {
		total: calcState.total,
		string: calcState.totalString,
		reset: reset,
		delete: del,
		calculate: calculator,
	};

	return <CalcContext.Provider value={calcContext}>{props.children}</CalcContext.Provider>;
};
