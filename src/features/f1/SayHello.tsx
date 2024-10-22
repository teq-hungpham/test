import { useEffect, useState } from "react";

const sayHello = () => {
	console.log("Hello from f1");
	return "Hello from f1";
};
export const SayHelloComponent = () => {
	const [state, setState] = useState("");

	useEffect(() => {
		const data = sayHello();
		setState(data);
	}, []);

	return (
		<h1>
			Hehe {state} {process.env.NEXT_PUBLIC_F1_ENABLED}
		</h1>
	);
};
