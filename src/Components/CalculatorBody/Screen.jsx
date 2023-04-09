import { useContext } from "react";
import CalcContext from "../../store/calc-context";

const Screen = (props) => {
	const ctx = useContext(CalcContext);

	return (
		<section className="bg-screenBg rounded-lg mt-4">
			<h2 className="text-right text-mainText text-calc py-4 pr-5">{ctx.total.toLocaleString()}</h2>
		</section>
	);
};

export default Screen;
