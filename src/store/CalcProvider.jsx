import { useReducer } from "react";
import CalcContext from "./calc-context";

const defaultCalcState = {
	total: 0,
	totalString: "",
};

const calcReducer = (state, action) => {
	switch (action.type) {
		case "DISPLAY":
			const newNum = (state.totalString += action.payload).toLocaleString();
			return {
				...state,
				totalString: newNum,
			};
		default:
			return defaultCalcState;
	}
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

	const displayNum = (num) => {
		dispatchCalcAction({ type: "DISPLAY", payload: num });
	};

	const calcContext = {
		total: calcState.total,
		string: calcState.totalString,
		reset: resetHandler,
		delete: deleteHandler,
		calculate: calculator,
		addNum: displayNum,
	};

	return <CalcContext.Provider value={calcContext}>{props.children}</CalcContext.Provider>;
};

export default CalcProvider;
