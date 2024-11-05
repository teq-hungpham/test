import { SayHelloComponent } from "@/features/f1";

export const AlfredSayHello = () => {
	return (
		<div>
			<h1>From Alfred:</h1>
			<div style={{ marginLeft: 20 }}>
				<SayHelloComponent />
			</div>
		</div>
	);
};
