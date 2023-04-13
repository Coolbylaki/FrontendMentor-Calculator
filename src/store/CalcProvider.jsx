import { useReducer } from "react";
import CalcContext from "./calc-context";

const defaultCalcState = {
	total: "",
};

const calcReducer = (state, action) => {
	switch (action.type) {
		case "DISPLAY":
			const newNum = state.total + action.payload;
			return {
				total: newNum,
			};
		case "RESET":
			return {
				total: "",
			};
		case "DELETE":
			return {
				total: state.total.slice(0, -1),
			};
		case "ADD":
			return {
				total: state.total + " + ",
			};
		case "SUBSTRACT":
			return {
				total: state.total + " - ",
			};
		case "MULTIPLY":
			return {
				total: state.total + " * ",
			};
		case "DIVIDE":
			return {
				total: state.total + " / ",
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

	const calculator = (method, num) => {
		if (method === "*" && method) {
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
		reset: resetHandler,
		delete: deleteHandler,
		calculate: calculator,
		addNum: displayNum,
	};

	return <CalcContext.Provider value={calcContext}>{props.children}</CalcContext.Provider>;
};

export default CalcProvider;
