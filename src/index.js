const ChartsPlugin = (md) => {
	const temp = md.renderer.rules.fence.bind(md.renderer.rules)
	md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
		const token = tokens[idx];
		const code = token.content.trim();
		try {
			const json = JSON.parse(code);
			switch (token.info) {
				case "chart":
					return `<canvas class="chartjs">${JSON.stringify(json)}</canvas>`;
					break;
				case "echarts":
					return `<div class="echarts"><div class="echarts-data">${JSON.stringify(json)}</div></div>`
					break;
				case 'highcharts':
					return `<div class="highcharts"><div class="highcharts-data">${JSON.stringify(json)}</div></div>`
					break;
				default:
					break;
			}
		} catch (err) {
			return `<pre>${err}</pre>`
		}
		return temp(tokens, idx, options, env, slf)
	}
}

module.exports = ChartsPlugin;
