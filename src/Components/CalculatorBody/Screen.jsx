import { useContext } from "react";
import CalcContext from "../../store/calc-context";

const Screen = (props) => {
	const ctx = useContext(CalcContext);

	const leftSide = parseInt(ctx.total.split(".")).toLocaleString();
	const rightSide = ctx.total.split(".")[1] ? ctx.total.split(".")[1] : "";

	const formatNumber = rightSide ? leftSide + "." + rightSide : leftSide;

	console.log(ctx);

	return (
		<section className="bg-screenBg rounded-lg mt-4 px-1">
			<h2 className="text-right text-mainText text-calc py-4 pr-5 overflow-auto">{ctx.total ? formatNumber : 0}</h2>
		</section>
	);
};

export default Screen;
