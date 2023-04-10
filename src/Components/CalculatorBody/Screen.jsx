import { useContext } from "react";
import CalcContext from "../../store/calc-context";

const Screen = (props) => {
	const ctx = useContext(CalcContext);

	console.log(ctx);

	return (
		<section className="bg-screenBg rounded-lg mt-4">
			<h2 className="text-right text-mainText text-calc py-4 pr-5">
				{ctx.total ? parseFloat(ctx.total).toLocaleString() : 0}
			</h2>
		</section>
	);
};

export default Screen;
