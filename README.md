# markdown-it

> Chart plugin for markdown-it such as chat.js、echarts、highcharts and etc.

## Installation

```
yarn install markdown-it-charts
```

## Usage

```js
import markdownIt from 'markdown-it'
import markdownItCharts from 'markdown-it-charts'
const mdi = markdownIt()
mdi.use(markdownItCharts)
mdi.render(`\`\`\`chart
{
  "type": "pie",
  "data": {
    "labels": [
      "Red",
      "Blue",
      "Yellow"
    ],
    "datasets": [
      {
        "data": [
          300,
          50,
          100
        ],
        "backgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        "hoverBackgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }
    ]
  },
  "options": {}
}
\`\`\``)
```

