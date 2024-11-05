import { SayHelloComponent, useHello } from "@/features/f1";
import { F2SayHello, useF2 } from "@/features/f2";

export default function Home() {
	const { state } = useHello();
	const { data } = useF2();

	return (
		<div
			className=" bg-red-100 w-screen h-screen flex justify-center items-center"
			children={
				<div>
					<h2>{state}</h2>
					<h3>{state}</h3>
					<SayHelloComponent />
					<hr />
					<h2>{data}</h2>
					<F2SayHello />
					<div>
						2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
						perspiciatis, ipsum ex adipisci doloribus ut maxime quisquam illo
						cumque quasi, debitis eaque! Nam dolorum laborum laudantium incidunt
						beatae placeat tempora.
					</div>
					<p>hehe</p>
					<p>hehe</p>
				</div>
			}
		/>
	);
}
