import { AlfredSayHello } from "@/features/alfred";
import { useHello } from "@/features/f1";
import { F2SayHello, useF2 } from "@/features/f2";

export default function Home() {
	const { state } = useHello();
	const { data } = useF2();

	return (
		<>
			<h2>{state}</h2>
			<AlfredSayHello />
			<hr />
			<h2>{data}</h2>
			<F2SayHello />
		</>
	);
}
