import LIFI from "@lifi/sdk";

const handler = async (req, res) => {
	try {
		const config = {
			apiUrl: req.body.isTestnet ? "https://staging.li.quest/v1/" : "https://li.quest/v1/",
		};
		const lifi = new LIFI(config);

		const routesRequest = {
			fromChainId: req.body.fromChain,
			toChainId: req.body.toChain,
			fromTokenAddress: req.body.fromToken,
			toTokenAddress: req.body.toToken,
			fromAddress: req.body.fromAddress,
			fromAmount: req.body.fromAmount,
		};

		const routes = await lifi.getRoutes(routesRequest);

		res.status(200).json({
			code: 200,
			message: routes.routes,
		});
	} catch (err) {
		res.status(500).json({
			code: 500,
			message: err,
		});
	}
};

export default handler;
