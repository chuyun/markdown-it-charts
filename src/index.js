const ChartsPlugin = (md) => {
    const tokenInfo = {
        CHART: 'chart',
        ECHARTS: 'echarts',
        HIGHCHARTS: 'highcharts',
        CHARTIST: 'chartist',
        C3: 'c3',
        TAUCHARTS: 'taucharts'
    }
    const temp = md
        .renderer
        .rules
        .fence
        .bind(md.renderer.rules);
    if (Object.freeze) {
        Object.freeze(tokenInfo);
    }
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx];
        const code = token
            .content
            .trim();
        if (Object.keys(tokenInfo).some((key) => token.info === tokenInfo[key])) {
            try {
                const json = JSON.parse(code);
                switch (token.info) {
                    case tokenInfo.CHART:
                        return `<canvas class="chartjs">${JSON.stringify(json)}</canvas>`;
                        break;
                    case tokenInfo.ECHARTS:
                        return `<div class="echarts"></div><div class="echarts-data" style='display:none'>${JSON.stringify(json)}</div>`
                        break;
                    case tokenInfo.HIGHCHARTS:
                        return `<div class="highcharts"><div class="highcharts-data" style='display:none'>${JSON.stringify(json)}</div></div>`
                        break;
                    case tokenInfo.CHARTIST:
                        return `<div class='ct-chart ct-golden-section'></div><div class='chartist-data' style='display:none'>${JSON.stringify(json)}</div>`
                        break;
                    case tokenInfo.C3:
                        return `<div class='c3-chart' id=${json
                            .id}></div><div class='c3-data' style='display:none'>${JSON
                            .stringify(json)}</div>`
                        break;
                    case tokenInfo.TAUCHARTS:
                        return `<div class='taucharts' id=${json
                            .id}></div><div class='taucharts-data' style='display:none'>${JSON
                            .stringify(json)}</div>`
                        break;
                    default:
                        break;
                }
            } catch (err) {
                return `<pre>${err}</pre>`
            }
        }
        return temp(tokens, idx, options, env, slf)
    }
}

module.exports = ChartsPlugin;
