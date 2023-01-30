import LIFI from "@lifi/sdk";

const handler = async (req, res) => {
	try {
		const apiUrl = req.body.isTestnet ? "https://staging.li.quest/v1" : "https://li.quest/v1";

		const data = await fetch(`${apiUrl}/chains`, {
			method: "GET",
			headers: { accept: "application/json" },
		});

		const chains = await data.json();

		res.status(200).json({
			code: 200,
			message: chains.chains,
		});
	} catch (err) {
		res.status(500).json({
			code: 500,
			message: err,
		});
	}
};

export default handler;
