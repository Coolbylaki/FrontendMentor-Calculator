import { useContext } from "react";
import CalcContext from "../../store/calc-context";

const Screen = () => {
	const ctx = useContext(CalcContext);

	console.log(ctx);

	return (
		<section className="bg-screenBg rounded-lg mt-4 px-1">
			<h2 className="text-right text-mainText text-calc py-4 px-3 overflow-auto">{ctx.total ? ctx.total : 0}</h2>
		</section>
	);
};

export default Screen;
