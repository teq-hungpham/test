import dotenv from "dotenv";
import { execSync } from "child_process";

function getBranch() {
	const t = execSync("git rev-parse --abbrev-ref HEAD");
	return t.toString().trim();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
	webpack: (config, { webpack }) => {
		const branch = getBranch();

    console.log('branch', `.env.${branch}`,);
    

		dotenv.config({
			path: `.env.${branch}`,
		});

		config.plugins.push(
			new webpack.DefinePlugin({
				"process.env": JSON.stringify(process.env),
			}),
		);

		config.plugins.push(
			new webpack.NormalModuleReplacementPlugin(
				/@\/features\/f1/,
				process.env.NEXT_PUBLIC_F1_ENABLED === "true"
					? "@/features/f1"
					: "@/features/f1/index.fallback",
			),
			new webpack.NormalModuleReplacementPlugin(
				/@\/features\/f2/,
				process.env.NEXT_PUBLIC_F2_ENABLED === "true"
					? "@/features/f2"
					: "@/features/f2/index.fallback",
			),
		);

    console.log("NEXT_PUBLIC_F1_ENABLED", process.env.NEXT_PUBLIC_F1_ENABLED);
    

		return config;
	},
};

export default nextConfig;
