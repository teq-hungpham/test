export const SayHelloComponent = () => {
	const a = "Hello from f1 fallback";
	console.log(a);
	return null;
};

export const useHello = () => {
	return {
		state: null,
	};
};
