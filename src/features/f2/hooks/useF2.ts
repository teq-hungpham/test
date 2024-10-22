import { useEffect, useState } from "react";

export const useF2 = () => {
	const [data, setData] = useState("");
	useEffect(() => {
		const timer = setTimeout(() => {
			setData("Hello from f2");
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return {
		data,
	};
};
