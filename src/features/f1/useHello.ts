import { useEffect, useState } from "react";

export const useHello = () => {
	const [state, setState] = useState("");
	useEffect(() => {
		const HELLO = "Hello from f1 hook";
		setState(HELLO);
	}, []);

  return {
    state
  }
};
