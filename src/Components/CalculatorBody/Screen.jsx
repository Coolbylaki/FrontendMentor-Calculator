import { useContext } from "react";
import CalcContext from "../../store/calc-context";

const Screen = () => {
	const ctx = useContext(CalcContext);

	const leftSide = parseInt(ctx.total.split(".")).toLocaleString();
	const rightSide = ctx.total.match(/\..*/);

	const formatNumber = rightSide ? leftSide.concat(rightSide) : leftSide;

	console.log(ctx);

	return (
		<section className="bg-screenBg rounded-lg mt-4 px-1">
			<h2 className="text-right text-mainText text-calc py-4 pr-5 overflow-auto">{ctx.total ? formatNumber : 0}</h2>
		</section>
	);
};

export default Screen;
