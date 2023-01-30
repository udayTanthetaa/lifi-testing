const withTM = require("next-transpile-modules")(["@lifi/widget"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
};

module.exports = withTM(nextConfig);
