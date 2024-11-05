/** @type {import('next').NextConfig} */

import dotenv from "dotenv";
import { execSync } from "child_process";
import { readdirSync } from "fs";

function getBranch() {
	const t = execSync("git rev-parse --abbrev-ref HEAD");
	return t.toString().trim().split("/")[0];
}

function getFeatures() {
	const features = readdirSync("./src/features");
	return features;
}

function getEnv(config, webpack) {
	const branch = getBranch();

	dotenv.config({
		path: `.env.${branch}`,
	});

	config.plugins.push(
		new webpack.DefinePlugin({
			"process.env": JSON.stringify(process.env),
		}),
	);
}
function replaceUnusedFeatures(config, webpack) {
	const features = getFeatures();

	features.forEach((feature) => {
		const envKey = `NEXT_PUBLIC_FEATURE_${feature}`;

		if (!process.env[envKey] || process.env[envKey] === "false") {
			config.plugins.push(
				new webpack.NormalModuleReplacementPlugin(
					new RegExp(`@\\/features\\/${feature}`),
					`@/features/${feature}/index.fallback`,
				),
			);
		}
	});
}

const nextConfig = {
	output: "export",
	reactStrictMode: true,
	webpack: (config, { webpack }) => {
		getEnv(config, webpack);
		replaceUnusedFeatures(config, webpack);

		console.log("NEXT_PUBLIC_F1_ENABLED", process.env.NEXT_PUBLIC_FEATURE_f1);

		return config;
	},
};

export default nextConfig;
